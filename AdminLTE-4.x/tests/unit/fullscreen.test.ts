import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import FullScreen from '../../src/ts/fullscreen'
import { initialize, teardown } from '../../src/ts/util/index'

const expectIcons = (fullscreen: boolean) => {
  for (const icon of document.querySelectorAll('[data-lte-icon="maximize"]')) {
    expect(icon.classList.contains('d-none')).toBe(fullscreen)
  }

  for (const icon of document.querySelectorAll('[data-lte-icon="minimize"]')) {
    expect(icon.classList.contains('d-none')).toBe(!fullscreen)
  }
}

describe('FullScreen', () => {
  beforeEach(() => {
    document.body.innerHTML = Array.from({ length: 2 }, () => `
      <button data-lte-toggle="fullscreen">
        <i data-lte-icon="maximize"></i>
        <i data-lte-icon="minimize" class="d-none"></i>
      </button>
    `).join('')
    Object.defineProperties(document, {
      fullscreenElement: { get: () => null, configurable: true },
      fullscreenEnabled: { get: () => true, configurable: true }
    })
    initialize()
  })

  afterEach(() => {
    teardown()
    vi.restoreAllMocks()
    document.body.replaceChildren()
  })

  it('updates every fullscreen toggle on entry and browser-initiated exit', () => {
    vi.spyOn(document, 'fullscreenElement', 'get').mockReturnValue(document.documentElement)
    document.dispatchEvent(new Event('fullscreenchange'))
    expectIcons(true)

    vi.spyOn(document, 'fullscreenElement', 'get').mockReturnValue(null)
    document.dispatchEvent(new Event('fullscreenchange'))
    expectIcons(false)
  })

  it('synchronizes initial icons without announcing a fullscreen transition', () => {
    const changed = vi.fn()
    document.addEventListener('maximized.lte.fullscreen', changed, { once: true })
    vi.spyOn(document, 'fullscreenElement', 'get').mockReturnValue(document.documentElement)
    initialize()
    expectIcons(true)
    expect(changed).not.toHaveBeenCalled()
    document.removeEventListener('maximized.lte.fullscreen', changed)
  })

  it('preserves card-maximize icons during initialization and fullscreen transitions', () => {
    document.body.insertAdjacentHTML('beforeend', `
      <button data-lte-toggle="card-maximize">
        <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
        <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
      </button>
    `)
    const icons = [...document.querySelectorAll('[data-lte-toggle="card-maximize"] i')]
    const classes = icons.map(icon => icon.className)
    initialize()
    expect(icons.map(icon => icon.className)).toEqual(classes)
    const fullscreen = vi.spyOn(document, 'fullscreenElement', 'get')
    for (const element of [document.documentElement, null]) {
      fullscreen.mockReturnValue(element)
      document.dispatchEvent(new Event('fullscreenchange'))
      expect(icons.map(icon => icon.className)).toEqual(classes)
    }
  })

  it('announces one transition per toggle after repeated initialization', () => {
    initialize()
    initialize()
    const buttons = document.querySelectorAll('button')
    const listeners = [...buttons].map(button => {
      const listener = vi.fn()
      button.addEventListener('maximized.lte.fullscreen', listener)
      return listener
    })
    vi.spyOn(document, 'fullscreenElement', 'get').mockReturnValue(document.documentElement)
    document.dispatchEvent(new Event('fullscreenchange'))
    for (const listener of listeners) expect(listener).toHaveBeenCalledTimes(1)
  })

  it('leaves icons unchanged when fullscreen is unavailable', () => {
    vi.spyOn(document, 'fullscreenEnabled', 'get').mockReturnValue(false)
    FullScreen.getOrCreateInstance(document.querySelector('button')!).toggleFullScreen()
    expectIcons(false)
  })

  it('handles denied requests without changing icons or emitting success', async () => {
    const request = vi.fn().mockRejectedValue(new Error('Denied'))
    Object.defineProperty(document.documentElement, 'requestFullscreen', { value: request, configurable: true })
    vi.spyOn(document, 'fullscreenEnabled', 'get').mockReturnValue(true)
    FullScreen.getOrCreateInstance(document.querySelector('button')!).toggleFullScreen()
    await Promise.resolve()
    expect(request).toHaveBeenCalledTimes(1)
    expectIcons(false)
    delete (document.documentElement as Partial<HTMLElement>).requestFullscreen
  })
})
