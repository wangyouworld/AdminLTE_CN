import { afterEach, describe, expect, it } from 'vitest'
import ColorMode from '../../src/ts/color-mode'

const buildToggles = (): void => {
  document.body.innerHTML = `
    <i class="bi bi-sun-fill" data-lte-theme-icon="light"></i>
    <i class="bi bi-moon-fill d-none" data-lte-theme-icon="dark"></i>
    <button type="button" data-bs-theme-value="light" aria-pressed="false">
      Light <i class="bi bi-check-lg d-none"></i>
    </button>
    <button type="button" data-bs-theme-value="dark" aria-pressed="false">
      Dark <i class="bi bi-check-lg d-none"></i>
    </button>
  `
}

describe('ColorMode', () => {
  afterEach(() => {
    document.body.replaceChildren()
    localStorage.clear()
    document.documentElement.removeAttribute('data-bs-theme')
  })

  it('setTheme applies, persists and announces the theme', () => {
    buildToggles()
    let detail: unknown
    document.addEventListener('changed.lte.color-mode', event => {
      detail = (event as CustomEvent).detail
    }, { once: true })

    new ColorMode().setTheme('dark')

    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark')
    expect(localStorage.getItem('lte-theme')).toBe('dark')
    expect(detail).toEqual({ theme: 'dark', resolved: 'dark' })
  })

  it('setTheme syncs toggle state and indicator icons', () => {
    buildToggles()
    new ColorMode().setTheme('dark')

    const darkToggle = document.querySelector('[data-bs-theme-value="dark"]') as HTMLElement
    const lightToggle = document.querySelector('[data-bs-theme-value="light"]') as HTMLElement

    expect(darkToggle.classList.contains('active')).toBe(true)
    expect(darkToggle.getAttribute('aria-pressed')).toBe('true')
    expect(darkToggle.querySelector('.bi-check-lg')?.classList.contains('d-none')).toBe(false)
    expect(lightToggle.getAttribute('aria-pressed')).toBe('false')
    expect(document.querySelector('[data-lte-theme-icon="dark"]')?.classList.contains('d-none')).toBe(false)
    expect(document.querySelector('[data-lte-theme-icon="light"]')?.classList.contains('d-none')).toBe(true)
  })

  it('ignores garbage in localStorage', () => {
    localStorage.setItem('lte-theme', 'purple')
    expect(new ColorMode().getStoredTheme()).toBeNull()
  })

  it('data-api: clicking a toggle applies the theme via delegation', () => {
    buildToggles()
    const darkToggle = document.querySelector('[data-bs-theme-value="dark"]') as HTMLElement
    darkToggle.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark')
    expect(localStorage.getItem('lte-theme')).toBe('dark')
  })
})
