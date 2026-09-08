import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { slideDown, slideUp } from '../../src/ts/util/index'

const SPEED = 100

describe('slide animations', () => {
  let element: HTMLElement

  beforeEach(() => {
    vi.useFakeTimers()
    element = document.createElement('div')
    document.body.append(element)
  })

  afterEach(() => {
    vi.useRealTimers()
    element.remove()
  })

  it('slideUp hides the element and cleans its inline styles', () => {
    slideUp(element, SPEED)
    vi.advanceTimersByTime(SPEED + 10)

    expect(element.style.display).toBe('none')
    expect(element.style.height).toBe('')
    expect(element.style.overflow).toBe('')
  })

  it('a slideDown during a running slideUp cancels the stale cleanup', () => {
    slideUp(element, SPEED)
    vi.advanceTimersByTime(SPEED / 2)

    slideDown(element, SPEED)
    // The canceled slideUp's cleanup timer must NOT fire and hide the element.
    vi.advanceTimersByTime(SPEED * 2)

    expect(element.style.display).not.toBe('none')
  })

  it('slideDown after a completed slideUp makes the element visible again', () => {
    slideUp(element, SPEED)
    vi.advanceTimersByTime(SPEED + 10)
    expect(element.style.display).toBe('none')

    slideDown(element, SPEED)
    vi.advanceTimersByTime(SPEED + 10)
    expect(element.style.display).not.toBe('none')
  })

  it('duration <= 1 short-circuits without leaving animation styles', () => {
    slideUp(element, 0)
    expect(element.style.display).toBe('none')
    expect(element.style.height).toBe('')
  })
})
