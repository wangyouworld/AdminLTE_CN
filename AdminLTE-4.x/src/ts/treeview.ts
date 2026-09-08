/**
 * --------------------------------------------
 * @file AdminLTE treeview.ts
 * @description Treeview plugin for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */

import { BaseComponent, dispatchCustomEvent } from './base-component'
import {
  onDOMContentLoaded,
  slideDown,
  slideUp
} from './util/index'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'treeview'
const EVENT_KEY = `.lte.${NAME}`

// Cancelable "before" events (dispatched on the nav-item as an action starts)
const EVENT_EXPAND = `expand${EVENT_KEY}`
const EVENT_COLLAPSE = `collapse${EVENT_KEY}`

// "After" events (dispatched on the nav-item when the animation finished)
const EVENT_EXPANDED = `expanded${EVENT_KEY}`
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`

const CLASS_NAME_MENU_OPEN = 'menu-open'
const SELECTOR_NAV_ITEM = '.nav-item'
const SELECTOR_NAV_LINK = '.nav-link'
const SELECTOR_TREEVIEW_MENU = '.nav-treeview'
const SELECTOR_DATA_TOGGLE = '[data-lte-toggle="treeview"]'

const Default = {
  animationSpeed: 300,
  accordion: true
}

type Config = {
  animationSpeed: number;
  accordion: boolean;
}

/**
 * Reflect a submenu's open state on its toggle link so screen readers can
 * announce the treeview as expandable/expanded (WCAG 4.1.2).
 */
const setAriaExpanded = (navItem: Element, expanded: boolean): void => {
  const link = navItem.querySelector(`:scope > ${SELECTOR_NAV_LINK}`)
  link?.setAttribute('aria-expanded', String(expanded))
}

/**
 * Class Definition
 * ====================================================
 */

class Treeview extends BaseComponent {
  static get NAME(): string {
    return NAME
  }

  static getInstance(element: Element | null | undefined): Treeview | null {
    return this._getInstance(element) as Treeview | null
  }

  static getOrCreateInstance(element: HTMLElement, config: Partial<Config> = {}): Treeview {
    return this.getInstance(element) ?? new this(element, config)
  }

  _config: Config

  constructor(element: HTMLElement, config: Partial<Config> = {}) {
    super(element)
    this._config = { ...Default, ...config }
  }

  open(): void {
    if (dispatchCustomEvent(this._element, EVENT_EXPAND, { cancelable: true }).defaultPrevented) {
      return
    }

    if (this._config.accordion) {
      const openMenuList = this._element.parentElement?.querySelectorAll(`${SELECTOR_NAV_ITEM}.${CLASS_NAME_MENU_OPEN}`)

      openMenuList?.forEach(openMenu => {
        // Skip the item being opened and anything nested inside it. The old
        // guard compared against the parent <ul> — which never matches a
        // nav-item — so calling open() on an already-open item slid its own
        // menu shut.
        if (!this._element.contains(openMenu)) {
          openMenu.classList.remove(CLASS_NAME_MENU_OPEN)
          setAriaExpanded(openMenu, false)
          const childElement = openMenu?.querySelector(SELECTOR_TREEVIEW_MENU) as HTMLElement | undefined
          if (childElement) {
            slideUp(childElement, this._config.animationSpeed)
          }
        }
      })
    }

    this._element.classList.add(CLASS_NAME_MENU_OPEN)
    setAriaExpanded(this._element, true)

    const childElement = this._element.querySelector(SELECTOR_TREEVIEW_MENU) as HTMLElement | undefined
    if (childElement) {
      slideDown(childElement, this._config.animationSpeed)
    }

    setTimeout(() => {
      if (this._element.classList.contains(CLASS_NAME_MENU_OPEN)) {
        dispatchCustomEvent(this._element, EVENT_EXPANDED)
      }
    }, this._config.animationSpeed)
  }

  close(): void {
    if (dispatchCustomEvent(this._element, EVENT_COLLAPSE, { cancelable: true }).defaultPrevented) {
      return
    }

    this._element.classList.remove(CLASS_NAME_MENU_OPEN)
    setAriaExpanded(this._element, false)

    const childElement = this._element.querySelector(SELECTOR_TREEVIEW_MENU) as HTMLElement | undefined
    if (childElement) {
      slideUp(childElement, this._config.animationSpeed)
    }

    setTimeout(() => {
      if (!this._element.classList.contains(CLASS_NAME_MENU_OPEN)) {
        dispatchCustomEvent(this._element, EVENT_COLLAPSED)
      }
    }, this._config.animationSpeed)
  }

  toggle(): void {
    if (this._element.classList.contains(CLASS_NAME_MENU_OPEN)) {
      this.close()
    } else {
      this.open()
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 * Clicks are handled by one delegated listener on `document`, so nav items
 * added after load (dynamic menus, Turbo Frames) work without
 * re-initialisation. Initial state (pre-opened menus, ARIA stamping) is
 * applied per page load below.
 */

document.addEventListener('click', event => {
  const target = event.target

  if (!(target instanceof Element)) {
    return
  }

  const toggleRoot = target.closest(SELECTOR_DATA_TOGGLE) as HTMLElement | null

  if (!toggleRoot) {
    return
  }

  const targetItem = target.closest(SELECTOR_NAV_ITEM) as HTMLElement | null
  const targetLink = target.closest(SELECTOR_NAV_LINK)

  // Avoid creating Treeview instances on non menu elements
  if (!targetItem?.querySelector(SELECTOR_TREEVIEW_MENU)) {
    return
  }

  if (target.getAttribute('href') === '#' || targetLink?.getAttribute('href') === '#') {
    event.preventDefault()
  }

  // Read config from data attributes on the treeview root, falling back to
  // Default. The config of the first interaction sticks to the instance.
  const accordionAttr = toggleRoot.dataset.accordion
  const animationSpeedAttr = toggleRoot.dataset.animationSpeed

  const config: Config = {
    accordion: accordionAttr === undefined ? Default.accordion : accordionAttr === 'true',
    animationSpeed: animationSpeedAttr === undefined ? Default.animationSpeed : Number(animationSpeedAttr)
  }

  Treeview.getOrCreateInstance(targetItem, config).toggle()
})

onDOMContentLoaded(() => {
  const openMenuItems = document.querySelectorAll(`${SELECTOR_NAV_ITEM}.${CLASS_NAME_MENU_OPEN}`)

  openMenuItems.forEach(menuItem => {
    const childElement = menuItem.querySelector(SELECTOR_TREEVIEW_MENU) as HTMLElement | undefined
    if (childElement) {
      slideDown(childElement, 0)

      const event = new Event(EVENT_LOAD_DATA_API)
      menuItem.dispatchEvent(event)
    }
  })

  // Stamp the initial ARIA state on every submenu toggle so assistive tech
  // knows the items are expandable before any interaction.
  document.querySelectorAll(SELECTOR_DATA_TOGGLE).forEach(root => {
    root.querySelectorAll(SELECTOR_NAV_ITEM).forEach(item => {
      if (item.querySelector(`:scope > ${SELECTOR_TREEVIEW_MENU}`)) {
        setAriaExpanded(item, item.classList.contains(CLASS_NAME_MENU_OPEN))
      }
    })
  })
})

export default Treeview
