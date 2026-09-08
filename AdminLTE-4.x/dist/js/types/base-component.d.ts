/**
 * --------------------------------------------
 * @file AdminLTE base-component.ts
 * @description Shared component lifecycle for AdminLTE plugins: a per-element
 * instance registry (getInstance / getOrCreateInstance / dispose) and a
 * consistent custom-event contract, mirroring Bootstrap's component API.
 * @license MIT
 * --------------------------------------------
 */
declare class BaseComponent {
    static get NAME(): string;
    static get DATA_KEY(): string;
    /**
     * Untyped registry lookup. Every component exposes a typed wrapper
     * (e.g. CardWidget.getInstance()) built on top of this.
     */
    protected static _getInstance(element: Element | null | undefined): BaseComponent | null;
    _element: HTMLElement;
    constructor(element: HTMLElement);
    /**
     * Remove this instance from the registry so getInstance() no longer
     * returns it. Subclasses release their own resources, then call
     * super.dispose().
     */
    dispose(): void;
}
/**
 * Dispatch a namespaced custom event that bubbles — so applications can
 * listen once on `document` — and can optionally carry a payload or be
 * canceled. Returns the event so callers can check `defaultPrevented`.
 */
declare const dispatchCustomEvent: <T = undefined>(element: Element, name: string, options?: {
    cancelable?: boolean;
    detail?: T;
}) => CustomEvent<T | undefined>;
export { BaseComponent, dispatchCustomEvent };
