/**
 * Lifecycle management
 * ============================================================================
 *
 * Plugins register their initialisation through `onDOMContentLoaded`. Besides
 * the initial page load, every registered callback is re-run on Hotwired Turbo
 * navigations (`turbo:load`): Turbo Drive swaps the <body> without a full page
 * reload, so without re-initialisation plugins such as PushMenu and TreeView
 * stop working after the first in-app link click (#563, #5890).
 *
 * Re-running init would normally leak listeners, because callbacks also bind to
 * `window`/`document`, which survive Turbo's <body> swap. To prevent that, each
 * cycle has its own `AbortController`: callbacks should attach their
 * window/document-level listeners with the signal from `getLifecycleSignal()`.
 * The signal is aborted on `turbo:before-render`, tearing down the previous
 * cycle's listeners before the callbacks run again. Listeners bound to elements
 * inside <body> don't need the signal — Turbo discards the old <body>, so they
 * are cleaned up automatically.
 */
/**
 * The AbortSignal for the current lifecycle. Pass it as the
 * `{ signal }` option to window/document `addEventListener` calls made during
 * initialisation so they are removed automatically on the next Turbo render.
 */
declare const getLifecycleSignal: () => AbortSignal;
declare const onDOMContentLoaded: (callback: () => void) => void;
/**
 * Check if an element has a specific data attribute using ES2022 Object.hasOwn()
 */
declare const hasDataAttribute: (element: HTMLElement, attribute: string) => boolean;
/**
 * Get the last element from a NodeList using ES2022 Array.at()
 */
declare const getLastElement: <T extends Element>(elements: NodeListOf<T> | T[]) => T | undefined;
/**
 * Safe property access with better error handling
 */
declare const safePropertyAccess: (obj: Record<string, unknown>, property: string) => unknown;
declare const slideUp: (target: HTMLElement, duration?: number) => void;
declare const slideDown: (target: HTMLElement, duration?: number) => void;
declare const slideToggle: (target: HTMLElement, duration?: number) => void;
export { onDOMContentLoaded, getLifecycleSignal, slideUp, slideDown, slideToggle, hasDataAttribute, getLastElement, safePropertyAccess };
