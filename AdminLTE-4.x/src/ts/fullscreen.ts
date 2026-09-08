/**
 * --------------------------------------------
 * @file AdminLTE fullscreen.ts
 * @description Fullscreen plugin for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */

import { BaseComponent, dispatchCustomEvent } from './base-component'
import {
  getLifecycleSignal,
  onDOMContentLoaded
} from './util/index'

/**
 * Constants
 * ============================================================================
 */
const NAME = 'fullscreen'
const EVENT_KEY = `.lte.${NAME}`
const EVENT_MAXIMIZED = `maximized${EVENT_KEY}`
const EVENT_MINIMIZED = `minimized${EVENT_KEY}`

const SELECTOR_FULLSCREEN_TOGGLE = '[data-lte-toggle="fullscreen"]'
const SELECTOR_MAXIMIZE_ICON = '[data-lte-icon="maximize"]'
const SELECTOR_MINIMIZE_ICON = '[data-lte-icon="minimize"]'

/**
 * Keep the icons and custom events in sync with the browser's actual
 * fullscreen state. Driving this from the `fullscreenchange` event (rather
 * than from the request/exit calls) means the UI stays correct no matter how
 * the transition happened — including the cases the imperative approach could
 * never catch: a request that was denied (permissions policy, missing
 * `allowfullscreen` on an iframe, lost user gesture) and an exit triggered by
 * the user pressing ESC or F11.
 */
function syncFullScreenState(): void {
  const iconMaximize = document.querySelector<HTMLElement>(SELECTOR_MAXIMIZE_ICON)
  const iconMinimize = document.querySelector<HTMLElement>(SELECTOR_MINIMIZE_ICON)
  const isFullScreen = Boolean(document.fullscreenElement)

  // Toggle Bootstrap's .d-none utility instead of hardcoding inline
  // display:block. The previous approach overrode the icon library's
  // natural display value (eg. some icon fonts use inline-block) and
  // caused the icon to shift its position. Fixes #6021.
  iconMaximize?.classList.toggle('d-none', isFullScreen)
  iconMinimize?.classList.toggle('d-none', !isFullScreen)

  const eventName = isFullScreen ? EVENT_MAXIMIZED : EVENT_MINIMIZED

  document.querySelectorAll(SELECTOR_FULLSCREEN_TOGGLE).forEach(button => {
    dispatchCustomEvent(button, eventName)
  })
}

/**
 * Class Definition.
 * ============================================================================
 */
class FullScreen extends BaseComponent {
  static get NAME(): string {
    return NAME
  }

  static getInstance(element: Element | null | undefined): FullScreen | null {
    return this._getInstance(element) as FullScreen | null
  }

  static getOrCreateInstance(element: HTMLElement): FullScreen {
    return this.getInstance(element) ?? new this(element)
  }

  inFullScreen(): void {
    // Fire-and-forget: the resulting `fullscreenchange` event updates the
    // icons and dispatches `maximized.lte.fullscreen`. If the request is
    // denied the event never fires, so the UI correctly stays untouched.
    void document.documentElement.requestFullscreen().catch(() => {
      // Request denied — nothing to undo.
    })
  }

  outFullscreen(): void {
    void document.exitFullscreen().catch(() => {
      // Exit failed — nothing to undo.
    })
  }

  toggleFullScreen(): void {
    if (!document.fullscreenEnabled) {
      return
    }

    if (document.fullscreenElement) {
      this.outFullscreen()
    } else {
      this.inFullScreen()
    }
  }
}

/**
 * Data Api implementation
 * ============================================================================
 * Toggle clicks are delegated on `document`; the fullscreenchange listener is
 * re-registered per page load with the lifecycle signal.
 */

document.addEventListener('click', event => {
  const target = event.target

  if (!(target instanceof Element)) {
    return
  }

  const button = target.closest(SELECTOR_FULLSCREEN_TOGGLE) as HTMLElement | null

  if (!button) {
    return
  }

  event.preventDefault()
  FullScreen.getOrCreateInstance(button).toggleFullScreen()
})

onDOMContentLoaded(() => {
  document.addEventListener('fullscreenchange', syncFullScreenState, { signal: getLifecycleSignal() })
})

export default FullScreen
