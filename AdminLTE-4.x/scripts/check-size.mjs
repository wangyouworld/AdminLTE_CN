import { readFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import process from 'node:process'

// Use the same files and gzip budgets as CI's Bundlewatch report, without
// requiring its remote reporting/URL-shortening services for a local build.
const config = JSON.parse(await readFile(new URL('../.bundlewatch.config.json', import.meta.url), 'utf8'))
let failures = 0
for (const file of config.files) {
  const match = /^(\d+(?:\.\d+)?)\s*kB$/i.exec(file.maxSize)
  if (!match) throw new Error(`Unsupported size budget: ${file.maxSize}`)
  const limit = Number(match[1]) * 1024
  const body = await readFile(new URL('../' + file.path, import.meta.url))
  const size = gzipSync(body, { level: 9 }).length
  const passed = size <= limit
  if (!passed) failures++
  console.log(`${passed ? 'PASS' : 'FAIL'} ${file.path}: ${(size / 1024).toFixed(2)} kB / ${file.maxSize} (gzip)`)
}
process.exitCode = failures > 0 ? 1 : 0
