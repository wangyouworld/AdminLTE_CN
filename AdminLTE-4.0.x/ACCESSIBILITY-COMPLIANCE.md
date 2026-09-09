# AdminLTE Accessibility Statement

## 概述

AdminLTE 4 is built with accessibility in mind and aims for **WCAG 2.1 AA** conformance. This document describes honestly what is implemented today, what is partially implemented, and what is still on the roadmap — so you know exactly what you get and what your application still needs to provide.

> **Important:** a template can only ever be a starting point. Accessible markup in the demo pages does not make your application compliant — you remain responsible for testing the pages you build.

## ✅ Implemented

### Markup (demo pages)

- Semantic landmark structure on the app shell (`<nav>`, `<main>`, `<aside>`, `<footer>`) — non-list `.nav` containers receive `role="navigation"` automatically (#6038)
- Exactly one `<h1>` per page (the page title in the content header)
- Breadcrumbs wrapped in `<nav aria-label="breadcrumb">` with `aria-current="page"`
- `aria-label` on all icon-only controls (card tools, topbar toggles, sidebar toggle)
- Form inputs associated with `<label>` elements (visually hidden where the design is placeholder-driven, floating labels on the v2 auth pages)
- Table headers with `scope` attributes
- `lang="en"` declared, descriptive page titles, `meta name="color-scheme"`

### Behavior (`accessibility.ts` and components)

- **Live region announcements** (WCAG 4.1.3) — a single polite `#live-region`, with a public `announce()` API; alerts inserted into the DOM are announced automatically
- **Skip links** to main content and navigation, injected once and reused across Turbo navigations (WCAG 2.4.1)
- **Treeview state exposure** — sidebar submenu toggles carry `aria-expanded`, kept in sync by the Treeview component
- **Modal focus restoration** — the triggering element is captured on `show.bs.modal` and restored on close (skipped if it has left the document)
- **Escape** closes open dropdowns; Bootstrap's own modal keyboard handling is left untouched
- **Arrow-key navigation** in menus and dropdowns — only when focus is on a menu item; never intercepts keys inside inputs, textareas, selects, or contenteditable elements
- **Reduced motion** — `prefers-reduced-motion` disables smooth scrolling and shortens animations; `prefers-contrast: more` styles in the CSS
- **Theme-flash prevention** and dark mode via Bootstrap color modes, respecting `prefers-color-scheme` (#6043)
- **Form error identification** (WCAG 3.3.1/3.3.2) — validation errors get an `invalid-feedback` node wired via `aria-describedby` (appended to existing descriptions, not replacing them) and are announced assertively

### Explicit non-goals

- **No global focus wrapping.** Focus is deliberately *not* trapped at the page edges — wrapping Tab at the document boundary would itself violate WCAG 2.1.2 (No Keyboard Trap). Focus trapping is applied only inside modal dialogs.

## ⚠️ Partial / known gaps

These are known, tracked limitations — pull requests welcome:

- **Treeview and push-menu have no dedicated keyboard interaction pattern** beyond normal Tab/Enter link behavior (no roving tabindex, no Home/End within the tree). `aria-expanded` is stamped by JS; static markup without JS does not carry it.
- **Drag-and-drop demos (kanban, sortable dashboard cards) have no keyboard alternative.** SortableJS does not provide one; treat these demos as visual examples only (WCAG 2.5.7 gap).
- **Touch target sizes are not enforced globally.** Card tool buttons are smaller than 44×44 px; an opt-in `.touch-target` utility class exists in `_accessibility.scss`.
- **Color contrast is not guaranteed for every Bootstrap color utility combination** you may compose. The `accessibilityUtils.checkColorContrast()` helper (supports `rgb()`/hex) can verify your combinations.
- **No automated accessibility tests run in CI yet** (axe/pa11y integration is on the roadmap). Claims in this document are verified manually and are point-in-time.

## 🔧 JavaScript API

```typescript
import { initAccessibility, accessibilityUtils } from 'admin-lte'

const accessibility = initAccessibility({
  announcements: true,      // live region + automatic alert announcements
  skipLinks: true,          // inject skip links
  focusManagement: true,    // modal focus restore, Escape handling
  keyboardNavigation: true, // arrow keys in menus
  reducedMotion: true       // respect prefers-reduced-motion
})

accessibility.announce('Data saved successfully', 'polite')
accessibility.focusElement('#error-summary')
accessibility.trapFocus(customDialogElement) // for non-Bootstrap dialogs

// Contrast checking (rgb() and hex supported)
accessibilityUtils.checkColorContrast('#000000', '#ffffff') // { ratio: 21, passes: true }
```

The module is initialized automatically by `adminlte.js`. All document-level listeners are registered against the Turbo lifecycle signal, so Hotwired Turbo navigations neither leak listeners nor duplicate injected nodes.

## 🧪 How to test your pages

- **Automated:** [axe-core](https://github.com/dequelabs/axe-core), [WAVE](https://wave.webaim.org/), Lighthouse accessibility audit
- **Keyboard:** navigate your entire flow with Tab/Shift+Tab/Enter/Escape only; confirm focus is always visible and never trapped
- **Screen readers:** [NVDA](https://www.nvaccess.org/) (Windows, free), VoiceOver (macOS/iOS), JAWS
- **Zoom:** verify layouts at 200% zoom and 320px viewport width
- **Motion:** enable "reduce motion" in your OS and confirm animations calm down

## 🗺️ Roadmap

- axe/pa11y checks in CI against the built demo pages
- Keyboard interaction pattern (roving tabindex) for the sidebar treeview
- `aria-expanded`/`aria-controls` in the static demo markup (not only JS-stamped)
- Audit and document contrast for all shipped color variants
- RTL accessibility review

## 📚 Resources

- [WCAG 2.1 指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
