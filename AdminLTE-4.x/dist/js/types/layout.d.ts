/**
 * ----------------------------------------------------------------------------
 * @file AdminLTE layout.ts
 * @description Layout for AdminLTE.
 * @license MIT
 * ----------------------------------------------------------------------------
 */
/**
 * ----------------------------------------------------------------------------
 * Class Definition
 * ----------------------------------------------------------------------------
 */
declare class Layout {
    _element: HTMLElement;
    _holdTransitionTimer: ReturnType<typeof setTimeout> | undefined;
    constructor(element: HTMLElement);
    holdTransition(time?: number): void;
}
export default Layout;
