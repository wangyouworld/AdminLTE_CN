/**
 * --------------------------------------------
 * @file AdminLTE card-widget.ts
 * @description Card widget for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */

import {
  onDOMContentLoaded,
  slideUp,
  slideDown
} from './util/index'

/**
 * Constants
 * ====================================================
 */

const DATA_KEY = 'lte.card-widget'
const EVENT_KEY = `.${DATA_KEY}`
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`
const EVENT_EXPANDED = `expanded${EVENT_KEY}`
const EVENT_REMOVE = `remove${EVENT_KEY}`
const EVENT_MAXIMIZED = `maximized${EVENT_KEY}`
const EVENT_MINIMIZED = `minimized${EVENT_KEY}`

const CLASS_NAME_CARD = 'card'
const CLASS_NAME_COLLAPSED = 'collapsed-card'
const CLASS_NAME_COLLAPSING = 'collapsing-card'
const CLASS_NAME_EXPANDING = 'expanding-card'
const CLASS_NAME_WAS_COLLAPSED = 'was-collapsed'
const CLASS_NAME_MAXIMIZED = 'maximized-card'

const SELECTOR_DATA_REMOVE = '[data-lte-toggle="card-remove"]'
const SELECTOR_DATA_COLLAPSE = '[data-lte-toggle="card-collapse"]'
const SELECTOR_DATA_MAXIMIZE = '[data-lte-toggle="card-maximize"]'
const SELECTOR_CARD = `.${CLASS_NAME_CARD}`
const SELECTOR_CARD_BODY = '.card-body'
const SELECTOR_CARD_FOOTER = '.card-footer'

type Config = {
  animationSpeed: number;
  collapseTrigger: string;
  removeTrigger: string;
  maximizeTrigger: string;
}

const Default: Config = {
  animationSpeed: 500,
  collapseTrigger: SELECTOR_DATA_COLLAPSE,
  removeTrigger: SELECTOR_DATA_REMOVE,
  maximizeTrigger: SELECTOR_DATA_MAXIMIZE
}

class CardWidget {
  _element: HTMLElement
  _parent: HTMLElement | undefined
  _clone: HTMLElement | undefined
  _config: Config

  constructor(element: HTMLElement, config: Config) {
    this._element = element
    this._parent = element.closest(SELECTOR_CARD) as HTMLElement | undefined

    if (element.classList.contains(CLASS_NAME_CARD)) {
      this._parent = element
    }

    this._config = { ...Default, ...config }
  }

  collapse() {
    const event = new Event(EVENT_COLLAPSED)

    if (this._parent) {
      this._parent.classList.add(CLASS_NAME_COLLAPSING)
      this._parent.classList.remove(CLASS_NAME_EXPANDING)

      // Only target direct children to avoid affecting nested cards
      const elm = this._parent?.querySelectorAll(`:scope > ${SELECTOR_CARD_BODY}, :scope > ${SELECTOR_CARD_FOOTER}`)

      elm.forEach(el => {
        if (el instanceof HTMLElement) {
          slideUp(el, this._config.animationSpeed)
        }
      })

      setTimeout(() => {
        // Guard against a stale timer: if expand() ran while this collapse
        // was still animating, the card must not end up marked collapsed.
        if (this._parent?.classList.contains(CLASS_NAME_COLLAPSING)) {
          this._parent.classList.add(CLASS_NAME_COLLAPSED)
          this._parent.classList.remove(CLASS_NAME_COLLAPSING)
        }
      }, this._config.animationSpeed)
    }

    this._element?.dispatchEvent(event)
  }

  expand() {
    const event = new Event(EVENT_EXPANDED)

    if (this._parent) {
      this._parent.classList.add(CLASS_NAME_EXPANDING)
      this._parent.classList.remove(CLASS_NAME_COLLAPSING, CLASS_NAME_COLLAPSED)

      // Only target direct children to avoid affecting nested cards
      const elm = this._parent?.querySelectorAll(`:scope > ${SELECTOR_CARD_BODY}, :scope > ${SELECTOR_CARD_FOOTER}`)

      elm.forEach(el => {
        if (el instanceof HTMLElement) {
          slideDown(el, this._config.animationSpeed)
        }
      })

      setTimeout(() => {
        // Same stale-timer guard as collapse(), in the other direction.
        if (this._parent?.classList.contains(CLASS_NAME_EXPANDING)) {
          this._parent.classList.remove(CLASS_NAME_EXPANDING)
        }
      }, this._config.animationSpeed)
    }

    this._element?.dispatchEvent(event)
  }

  remove() {
    const event = new Event(EVENT_REMOVE)

    if (this._parent) {
      const parent = this._parent
      slideUp(parent, this._config.animationSpeed)

      // Actually remove the card once the animation finishes — hiding it
      // would keep its form fields submitting and its ids in the document.
      setTimeout(() => {
        parent.remove()
      }, this._config.animationSpeed)
    }

    this._element?.dispatchEvent(event)
  }

  toggle() {
    // A card mid-collapse counts as collapsed so a second click during the
    // animation reverses it instead of being swallowed.
    if (this._parent?.classList.contains(CLASS_NAME_COLLAPSED) || this._parent?.classList.contains(CLASS_NAME_COLLAPSING)) {
      this.expand()
      return
    }

    this.collapse()
  }

  maximize() {
    const event = new Event(EVENT_MAXIMIZED)

    if (this._parent) {
      this._parent.style.height = `${this._parent.offsetHeight}px`
      this._parent.style.width = `${this._parent.offsetWidth}px`
      this._parent.style.transition = 'all .15s'

      setTimeout(() => {
        const htmlTag = document.querySelector('html')

        if (htmlTag) {
          htmlTag.classList.add(CLASS_NAME_MAXIMIZED)
        }

        if (this._parent) {
          this._parent.classList.add(CLASS_NAME_MAXIMIZED)

          if (this._parent.classList.contains(CLASS_NAME_COLLAPSED)) {
            this._parent.classList.add(CLASS_NAME_WAS_COLLAPSED)
          }
        }
      }, 150)
    }

    this._element?.dispatchEvent(event)
  }

  minimize() {
    const event = new Event(EVENT_MINIMIZED)

    if (this._parent) {
      this._parent.style.height = 'auto'
      this._parent.style.width = 'auto'
      this._parent.style.transition = 'all .15s'

      setTimeout(() => {
        const htmlTag = document.querySelector('html')

        if (htmlTag) {
          htmlTag.classList.remove(CLASS_NAME_MAXIMIZED)
        }

        if (this._parent) {
          this._parent.classList.remove(CLASS_NAME_MAXIMIZED)

          if (this._parent?.classList.contains(CLASS_NAME_WAS_COLLAPSED)) {
            this._parent.classList.remove(CLASS_NAME_WAS_COLLAPSED)
          }

          // Drop the inline sizing/transition once the restore transition has
          // finished so the card doesn't carry stale styles forever.
          setTimeout(() => {
            this._parent?.style.removeProperty('height')
            this._parent?.style.removeProperty('width')
            this._parent?.style.removeProperty('transition')
          }, 150)
        }
      }, 10)
    }

    this._element?.dispatchEvent(event)
  }

  toggleMaximize() {
    if (this._parent?.classList.contains(CLASS_NAME_MAXIMIZED)) {
      this.minimize()
      return
    }

    this.maximize()
  }
}

/**
 *
 * Data Api implementation
 * ====================================================
 */

onDOMContentLoaded(() => {
  const collapseBtn = document.querySelectorAll(SELECTOR_DATA_COLLAPSE)

  // Use currentTarget (the [data-lte-toggle] button itself), not target:
  // clicking the <i> icon inside the button would otherwise make the widget's
  // events fire on the icon instead of the button.
  collapseBtn.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault()
      const target = event.currentTarget as HTMLElement
      const data = new CardWidget(target, Default)
      data.toggle()
    })
  })

  const removeBtn = document.querySelectorAll(SELECTOR_DATA_REMOVE)

  removeBtn.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault()
      const target = event.currentTarget as HTMLElement
      const data = new CardWidget(target, Default)
      data.remove()
    })
  })

  const maxBtn = document.querySelectorAll(SELECTOR_DATA_MAXIMIZE)

  maxBtn.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault()
      const target = event.currentTarget as HTMLElement
      const data = new CardWidget(target, Default)
      data.toggleMaximize()
    })
  })
})

export default CardWidget
