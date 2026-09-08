import { describe, expect, it } from 'vitest'
import { BaseComponent, dispatchCustomEvent } from '../../src/ts/base-component'

class Widget extends BaseComponent {
  static get NAME(): string {
    return 'test-widget'
  }

  static getInstance(element: Element | null | undefined): Widget | null {
    return this._getInstance(element) as Widget | null
  }
}

class OtherWidget extends BaseComponent {
  static get NAME(): string {
    return 'other-widget'
  }

  static getInstance(element: Element | null | undefined): OtherWidget | null {
    return this._getInstance(element) as OtherWidget | null
  }
}

describe('BaseComponent registry', () => {
  it('returns the instance created for an element', () => {
    const element = document.createElement('div')
    const widget = new Widget(element)

    expect(Widget.getInstance(element)).toBe(widget)
  })

  it('returns null for elements without an instance', () => {
    expect(Widget.getInstance(document.createElement('div'))).toBeNull()
    expect(Widget.getInstance(null)).toBeNull()
  })

  it('keeps instances of different components on one element apart', () => {
    const element = document.createElement('div')
    const widget = new Widget(element)
    const other = new OtherWidget(element)

    expect(Widget.getInstance(element)).toBe(widget)
    expect(OtherWidget.getInstance(element)).toBe(other)
  })

  it('dispose() removes only the disposed component', () => {
    const element = document.createElement('div')
    const widget = new Widget(element)
    const other = new OtherWidget(element)

    widget.dispose()

    expect(Widget.getInstance(element)).toBeNull()
    expect(OtherWidget.getInstance(element)).toBe(other)
  })

  it('derives DATA_KEY from NAME', () => {
    expect(Widget.DATA_KEY).toBe('lte.test-widget')
  })
})

describe('dispatchCustomEvent', () => {
  it('bubbles to document', () => {
    const element = document.createElement('div')
    document.body.append(element)

    let seenAtDocument = false
    document.addEventListener('ping.lte.test', () => {
      seenAtDocument = true
    }, { once: true })

    dispatchCustomEvent(element, 'ping.lte.test')
    expect(seenAtDocument).toBe(true)
    element.remove()
  })

  it('supports cancelation and reports defaultPrevented', () => {
    const element = document.createElement('div')
    element.addEventListener('veto.lte.test', event => {
      event.preventDefault()
    }, { once: true })

    const event = dispatchCustomEvent(element, 'veto.lte.test', { cancelable: true })
    expect(event.defaultPrevented).toBe(true)
  })

  it('carries a detail payload', () => {
    const element = document.createElement('div')
    let payload: unknown

    element.addEventListener('data.lte.test', event => {
      payload = (event as CustomEvent).detail
    }, { once: true })

    dispatchCustomEvent(element, 'data.lte.test', { detail: { theme: 'dark' } })
    expect(payload).toEqual({ theme: 'dark' })
  })
})
