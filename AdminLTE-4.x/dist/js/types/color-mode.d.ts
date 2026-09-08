/**
 * --------------------------------------------
 * @file AdminLTE color-mode.ts
 * @description Color mode (light/dark/auto) switcher for AdminLTE.
 * Persists the choice in localStorage, follows the OS preference in
 * "auto" mode, and keeps [data-bs-theme-value] toggles and
 * [data-lte-theme-icon] indicator icons in sync.
 *
 * Ships in the bundle so applications no longer need to copy the demo's
 * inline script. The tiny no-flash snippet in <head> (see _head.astro)
 * remains inline by design — it must run before first paint.
 * @license MIT
 * --------------------------------------------
 */
type Theme = 'light' | 'dark' | 'auto';
/**
 * Class Definition
 * ====================================================
 */
declare class ColorMode {
    /**
     * Read the persisted theme choice, or null when nothing was stored or
     * localStorage is unavailable (private mode, sandboxed iframe).
     */
    getStoredTheme(): Theme | null;
    /**
     * The user's effective choice: the stored theme, falling back to the OS
     * preference.
     */
    getPreferredTheme(): Theme;
    /**
     * Resolve "auto" against the OS preference.
     */
    resolveTheme(theme: Theme): 'light' | 'dark';
    /**
     * Apply a theme and persist the choice. Dispatches
     * `changed.lte.color-mode` on the document with { theme, resolved }.
     */
    setTheme(theme: Theme): void;
    /**
     * Apply without persisting — used on init and when the OS preference
     * changes while in "auto" mode.
     */
    _applyTheme(theme: Theme): void;
    _prefersDark(): boolean;
    /**
     * Sync the [data-bs-theme-value] toggles (active state, pressed state,
     * check mark) and the [data-lte-theme-icon] indicator icons.
     */
    _showActiveTheme(theme: Theme): void;
    /**
     * Apply the preferred theme and sync the UI without persisting anything.
     */
    init(): void;
}
export default ColorMode;
