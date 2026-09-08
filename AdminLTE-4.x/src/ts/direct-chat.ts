/**
 * --------------------------------------------
 * @file AdminLTE direct-chat.ts
 * @description Direct chat for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */

import { BaseComponent, dispatchCustomEvent } from './base-component'

/**
 * Constants
 * ====================================================
 */

const NAME = 'direct-chat'
const EVENT_KEY = `.lte.${NAME}`
const EVENT_EXPANDED = `expanded${EVENT_KEY}`
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`

const SELECTOR_DATA_TOGGLE = '[data-lte-toggle="chat-pane"]'
const SELECTOR_DIRECT_CHAT = '.direct-chat'

const CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open'

/**
 * Class Definition
 * ====================================================
 */

class DirectChat extends BaseComponent {
  static get NAME(): string {
    return NAME
  }

  static getInstance(element: Element | null | undefined): DirectChat | null {
    return this._getInstance(element) as DirectChat | null
  }

  static getOrCreateInstance(element: HTMLElement): DirectChat {
    return this.getInstance(element) ?? new this(element)
  }

  toggle(): void {
    if (this._element.classList.contains(CLASS_NAME_DIRECT_CHAT_OPEN)) {
      this._element.classList.remove(CLASS_NAME_DIRECT_CHAT_OPEN)
      dispatchCustomEvent(this._element, EVENT_COLLAPSED)
    } else {
      this._element.classList.add(CLASS_NAME_DIRECT_CHAT_OPEN)
      dispatchCustomEvent(this._element, EVENT_EXPANDED)
    }
  }
}

/**
 *
 * Data Api implementation
 * ====================================================
 * One delegated listener on `document`: chat panes inserted later work, and
 * the listener survives Turbo's <body> swaps.
 */

document.addEventListener('click', event => {
  const target = event.target

  if (!(target instanceof Element)) {
    return
  }

  const trigger = target.closest(SELECTOR_DATA_TOGGLE)

  if (!trigger) {
    return
  }

  event.preventDefault()

  const chatPane = trigger.closest(SELECTOR_DIRECT_CHAT) as HTMLElement | null

  if (chatPane) {
    DirectChat.getOrCreateInstance(chatPane).toggle()
  }
})

export default DirectChat
