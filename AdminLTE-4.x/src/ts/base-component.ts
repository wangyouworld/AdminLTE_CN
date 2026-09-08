/**
 * --------------------------------------------
 * @file AdminLTE base-component.ts
 * @description Shared component lifecycle for AdminLTE plugins: a per-element
 * instance registry (getInstance / getOrCreateInstance / dispose) and a
 * consistent custom-event contract, mirroring Bootstrap's component API.
 * @license MIT
 * --------------------------------------------
 */

/**
 * element -> (data key -> component instance). WeakMap keys don't prevent
 * garbage collection, so instances die with their elements — important under
 * Hotwired Turbo, which swaps the whole <body> on navigation.
 */
const componentRegistry = new WeakMap<Element, Map<string, BaseComponent>>()

class BaseComponent {
  static get NAME(): string {
    throw new Error('Component subclasses must override the static NAME getter.')
  }

  static get DATA_KEY(): string {
    return `lte.${this.NAME}`
  }

  /**
   * Untyped registry lookup. Every component exposes a typed wrapper
   * (e.g. CardWidget.getInstance()) built on top of this.
   */
  protected static _getInstance(element: Element | null | undefined): BaseComponent | null {
    if (!element) {
      return null
    }

    return componentRegistry.get(element)?.get(this.DATA_KEY) ?? null
  }

  _element: HTMLElement

  constructor(element: HTMLElement) {
    this._element = element

    const instances = componentRegistry.get(element) ?? new Map<string, BaseComponent>()
    componentRegistry.set(element, instances)
    instances.set((this.constructor as typeof BaseComponent).DATA_KEY, this)
  }

  /**
   * Remove this instance from the registry so getInstance() no longer
   * returns it. Subclasses release their own resources, then call
   * super.dispose().
   */
  dispose(): void {
    const instances = componentRegistry.get(this._element)
    instances?.delete((this.constructor as typeof BaseComponent).DATA_KEY)

    if (instances?.size === 0) {
      componentRegistry.delete(this._element)
    }
  }
}

/**
 * Dispatch a namespaced custom event that bubbles — so applications can
 * listen once on `document` — and can optionally carry a payload or be
 * canceled. Returns the event so callers can check `defaultPrevented`.
 */
const dispatchCustomEvent = <T = undefined>(
  element: Element,
  name: string,
  options: { cancelable?: boolean; detail?: T } = {}
): CustomEvent<T | undefined> => {
  const event = new CustomEvent<T | undefined>(name, {
    bubbles: true,
    cancelable: options.cancelable ?? false,
    detail: options.detail
  })

  element.dispatchEvent(event)
  return event
}

export { BaseComponent, dispatchCustomEvent }
