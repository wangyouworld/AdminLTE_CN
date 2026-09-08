/**
 * AdminLTE Accessibility Module
 * WCAG 2.1 AA Compliance Features
 */
export interface AccessibilityConfig {
    announcements: boolean;
    skipLinks: boolean;
    focusManagement: boolean;
    keyboardNavigation: boolean;
    reducedMotion: boolean;
}
export declare class AccessibilityManager {
    private config;
    private liveRegion;
    private focusHistory;
    private readonly signal;
    constructor(config?: Partial<AccessibilityConfig>);
    private init;
    private createLiveRegion;
    private addSkipLinks;
    private ensureSkipTargets;
    private initFocusManagement;
    private handleEscapeKey;
    private initKeyboardNavigation;
    private handleMenuNavigation;
    private respectReducedMotion;
    private initErrorAnnouncements;
    private initTableAccessibility;
    private initFormAccessibility;
    private handleFormError;
    private initModalFocusManagement;
    private initDropdownFocusManagement;
    announce(message: string, priority?: 'polite' | 'assertive'): void;
    focusElement(selector: string): void;
    trapFocus(container: HTMLElement): void;
    addLandmarks(): void;
}
export declare const initAccessibility: (config?: Partial<AccessibilityConfig>) => AccessibilityManager;
export declare const accessibilityUtils: {
    checkColorContrast: (foreground: string, background: string) => {
        ratio: number;
        passes: boolean;
    };
    generateId: (prefix?: string) => string;
    isFocusable: (element: HTMLElement) => boolean;
};
