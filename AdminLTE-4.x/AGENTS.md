# Repository Guidelines

## Project Structure & Module Organization

AdminLTE 4 is a Bootstrap 5 dashboard template with vanilla TypeScript components.

- `src/ts/`: component behavior; `adminlte.ts` is the library entry point, and `util/` holds shared helpers.
- `src/scss/`: Sass styles, component partials, mixins, and optional color themes.
- `src/html/`: Astro demo/documentation pages and reusable Astro/MDX components.
- `src/assets/`: source images and other static assets.
- `src/config/`: Rollup, Astro, PostCSS, and asset-build configuration.
- `tests/unit/`: unit tests and shared setup; `tests/a11y.mjs` checks built pages.
- `dist/` and `src/html/public/`: generated output. Edit source files; exclude compiled `dist/` changes from contributor PRs.

## Build, Test, and Development Commands

Use Node.js 22.22.3+, 24.16.0+, or 26.3.0+ and npm 10+. Install with `npm ci`.

- `npm start`: run asset watchers and the Astro dev server at `http://localhost:3000`.
- `npm run build`: clean and rebuild CSS, JavaScript, declarations, assets, and demo/documentation HTML.
- `npm run css` / `npm run js`: rebuild styles or JavaScript independently.
- `npm run lint`: check ESLint, Stylelint, Astro, and lockfile rules.
- `npm test`: run Vitest once; `npm run test-watch` enables watch mode.
- `npm run production`: clean, lint, test, compile, and check local gzip budgets.

## Coding Style & Naming Conventions

Use two-space indentation, UTF-8, LF endings, and final newlines as defined in `.editorconfig`. Follow neighboring code and repository ESLint/Stylelint rules. Prettier is configured with single quotes, semicolons, and a 100-character line width; Astro has its own configuration.

Use strict TypeScript, PascalCase component classes, camelCase methods, and kebab-case component filenames such as `card-widget.ts`. Prefix Sass partials with `_`, and follow existing Bootstrap-compatible selectors and `data-lte-*` attributes.

## Testing Guidelines

Add behavior and regression tests as `tests/unit/<component>.test.ts`. Vitest uses `happy-dom` and `tests/unit/setup.ts`; no numeric coverage threshold is configured. Cover DOM state, events, and cleanup where relevant.

For UI changes, build first, then run `npm run test-a11y` and `npm run test-browser`. Install Chromium with `npx playwright install chromium`; set `BROWSERS=chromium,firefox,webkit` for all engines. Serious and critical axe violations fail the check. Review responsive layouts, dark mode, and RTL manually.

## Commit & Pull Request Guidelines

Follow the prevalent `type(scope): summary` commit format, for example `fix(header): prevent horizontal overflow`; common types include `feat`, `fix`, `docs`, and `chore`.

Branch from and target `master`. Keep PRs focused, describe the behavior change, link relevant issues, and report validation commands/results. Include screenshots for visual changes. Follow `.github/CONTRIBUTING.md` and ensure third-party contributions are appropriately licensed.
