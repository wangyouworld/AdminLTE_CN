/**
 * --------------------------------------------
 * @file AdminLTE fullscreen.ts
 * @description Fullscreen plugin for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */
import { BaseComponent } from './base-component';
/**
 * Class Definition.
 * ============================================================================
 */
declare class FullScreen extends BaseComponent {
    static get NAME(): string;
    static getInstance(element: Element | null | undefined): FullScreen | null;
    static getOrCreateInstance(element: HTMLElement): FullScreen;
    inFullScreen(): void;
    outFullscreen(): void;
    toggleFullScreen(): void;
}
export default FullScreen;
