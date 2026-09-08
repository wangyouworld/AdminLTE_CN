import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Treeview from '../../src/ts/treeview'

const SPEED = 50

const buildSidebar = (): void => {
  document.body.innerHTML = `
    <ul class="nav sidebar-menu" data-lte-toggle="treeview" data-animation-speed="${SPEED}">
      <li class="nav-item" id="item-a">
        <a href="#" class="nav-link"><p>A</p></a>
        <ul class="nav nav-treeview">
          <li class="nav-item"><a href="a1.html" class="nav-link">A1</a></li>
        </ul>
      </li>
      <li class="nav-item" id="item-b">
        <a href="#" class="nav-link"><p>B</p></a>
        <ul class="nav nav-treeview">
          <li class="nav-item"><a href="b1.html" class="nav-link">B1</a></li>
        </ul>
      </li>
    </ul>
  `
}

const item = (id: string): HTMLElement => document.querySelector(`#${id}`) as HTMLElement

describe('Treeview', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    buildSidebar()
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.replaceChildren()
  })

  it('open() marks the item open and stamps aria-expanded', () => {
    const tree = new Treeview(item('item-a'), { animationSpeed: SPEED })
    tree.open()

    expect(item('item-a').classList.contains('menu-open')).toBe(true)
    expect(item('item-a').querySelector(':scope > .nav-link')?.getAttribute('aria-expanded')).toBe('true')
  })

  it('accordion closes open siblings but never the item being opened', () => {
    const a = new Treeview(item('item-a'), { animationSpeed: SPEED, accordion: true })
    a.open()
    vi.advanceTimersByTime(SPEED * 2)

    const b = new Treeview(item('item-b'), { animationSpeed: SPEED, accordion: true })
    b.open()
    vi.advanceTimersByTime(SPEED * 2)

    expect(item('item-a').classList.contains('menu-open')).toBe(false)
    expect(item('item-b').classList.contains('menu-open')).toBe(true)

    // Re-opening an already-open item must not slide its own menu shut
    // (regression guard for the old parentElement comparison bug).
    b.open()
    vi.advanceTimersByTime(SPEED * 2)
    expect(item('item-b').classList.contains('menu-open')).toBe(true)
  })

  it('expanded fires after the animation; a canceled expand does nothing', () => {
    const a = new Treeview(item('item-a'), { animationSpeed: SPEED })
    const expanded = vi.fn()
    item('item-a').addEventListener('expanded.lte.treeview', expanded)

    a.open()
    expect(expanded).not.toHaveBeenCalled()
    vi.advanceTimersByTime(SPEED + 10)
    expect(expanded).toHaveBeenCalledTimes(1)

    item('item-b').addEventListener('expand.lte.treeview', event => {
      event.preventDefault()
    }, { once: true })
    new Treeview(item('item-b'), { animationSpeed: SPEED }).open()
    expect(item('item-b').classList.contains('menu-open')).toBe(false)
  })

  it('data-api: clicking a toggle link works via delegation and reads root config', () => {
    const link = item('item-a').querySelector(':scope > .nav-link') as HTMLElement
    link.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(item('item-a').classList.contains('menu-open')).toBe(true)
    const instance = Treeview.getInstance(item('item-a'))
    expect(instance).not.toBeNull()
    expect(instance?._config.animationSpeed).toBe(SPEED)
  })
})
