/**
 * --------------------------------------------
 * @file AdminLTE direct-chat.ts
 * @description Direct chat for AdminLTE.
 * @license MIT
 * --------------------------------------------
 */
import { BaseComponent } from './base-component';
/**
 * Class Definition
 * ====================================================
 */
declare class DirectChat extends BaseComponent {
    static get NAME(): string;
    static getInstance(element: Element | null | undefined): DirectChat | null;
    static getOrCreateInstance(element: HTMLElement): DirectChat;
    toggle(): void;
}
export default DirectChat;
