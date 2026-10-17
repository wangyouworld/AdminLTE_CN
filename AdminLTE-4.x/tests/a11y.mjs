/**
 * Accessibility smoke check: runs axe-core against a set of built demo pages
 * served from dist/. Fails on serious/critical violations.
 *
 * Requires a Playwright installation. Like scripts/social-preview.mjs, it is
 * resolved from PLAYWRIGHT_PATH when playwright is not a local dependency:
 *
 *   npm run build
 *   PLAYWRIGHT_PATH=/path/to/node_modules/playwright npm run test-a11y
 *
 * Playwright is a development dependency. Install Chromium with
 * `npx playwright install chromium` before running this check.
 */

import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import process from 'node:process'

import { serveDist } from './serve-dist.mjs'

const require = createRequire(import.meta.url)

const PAGES = [
  '/index.html',
  '/index2.html',
  '/index3.html',
  '/pages/calendar.html',
  '/pages/kanban.html',
  '/tables/data.html',
  '/charts/chartjs.html',
  '/starter.html',
  '/users.html',
  '/examples/login.html',
  '/examples/forgot-password.html',
  '/pages/settings.html',
  '/tables/simple.html',
  '/forms/advanced.html',
  '/forms/editors.html',
  '/layout/top-nav.html',
  '/UI/general.html',
  '/UI/ribbons.html',
  '/UI/colors.html',
  '/widgets/social.html',
  '/pages/gallery.html',
  '/pages/search-results.html',
  '/docs/components/miscellaneous.html',
  '/docs/colors.html'
]

// Failures gate on impact, so new pages can't regress below this bar.
const FAILING_IMPACTS = new Set(['serious', 'critical'])

const run = async chromium => {
  const axeSource = await readFile(require.resolve('axe-core/axe.min.js'), 'utf8')
  const server = await serveDist()
  let browser
  let failures = 0

  try {
    browser = await chromium.launch()
    const page = await browser.newPage({ colorScheme: process.env.A11Y_COLOR_SCHEME || 'light' })

    for (const pagePath of PAGES) {
      await page.goto(`${server.url}${pagePath}`, { waitUntil: 'networkidle' })
      await page.evaluate(axeSource)
      const violations = await page.evaluate(async () => {
        // eslint-disable-next-line no-undef
        const axeResults = await axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
        })
        return axeResults.violations.map(violation => ({
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          nodes: violation.nodes.map(node => ({ target: node.target, summary: node.failureSummary }))
        }))
      })

      const gating = violations.filter(violation => FAILING_IMPACTS.has(violation.impact))
      const advisory = violations.filter(violation => !FAILING_IMPACTS.has(violation.impact))

      console.log(`${pagePath}: ${gating.length} gating, ${advisory.length} advisory violation(s)`)
      for (const violation of [...gating, ...advisory]) {
        const marker = FAILING_IMPACTS.has(violation.impact) ? 'FAIL' : 'warn'
        console.log(`  [${marker}] ${violation.impact}: ${violation.id} — ${violation.help} (${violation.nodes.length} node(s))`)
        if (marker === 'FAIL') {
          for (const node of violation.nodes) console.log(`    ${node.target.join(', ')}: ${node.summary}`)
        }
      }

      failures += gating.length
    }

    return failures
  } finally {
    await browser?.close()
    await server.close()
  }
}

let chromium
try {
  ({ chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright'))
} catch {
  console.error('test-a11y: Playwright is required. Run npm ci and npx playwright install chromium.')
  process.exitCode = 1
}

if (chromium) {
  const failures = await run(chromium)

  if (failures > 0) {
    console.error(`\ntest-a11y: ${failures} serious/critical violation(s).`)
    process.exitCode = 1
  } else {
    console.log('\ntest-a11y: no serious/critical violations.')
  }
}
