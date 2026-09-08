/**
 * --------------------------------------------
 * @file AdminLTE treeview.ts
 * @description Treeview plugin for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */
import { BaseComponent } from './base-component';
type Config = {
    animationSpeed: number;
    accordion: boolean;
};
/**
 * Class Definition
 * ====================================================
 */
declare class Treeview extends BaseComponent {
    static get NAME(): string;
    static getInstance(element: Element | null | undefined): Treeview | null;
    static getOrCreateInstance(element: HTMLElement, config?: Partial<Config>): Treeview;
    _config: Config;
    constructor(element: HTMLElement, config?: Partial<Config>);
    open(): void;
    close(): void;
    toggle(): void;
}
export default Treeview;
