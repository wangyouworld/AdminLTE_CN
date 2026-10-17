import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const distRoot = fileURLToPath(new URL('../dist/', import.meta.url))
const mime = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.map': 'application/json', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ico': 'image/x-icon'
}

// Shared by browser and accessibility checks. Bind only to loopback and
// choose a free port, so concurrent test jobs cannot steal each other's server.
export async function serveDist() {
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url, 'http://localhost')
      const pathname = decodeURIComponent(url.pathname)
      const filename = path.resolve(distRoot, '.' + pathname, pathname.endsWith('/') ? 'index.html' : '')
      if (!filename.startsWith(distRoot)) {
        response.writeHead(403).end()
        return
      }

      const body = await readFile(filename)
      response.writeHead(200, { 'content-type': mime[path.extname(filename)] || 'application/octet-stream' })
      response.end(body)
    } catch {
      response.writeHead(404).end()
    }
  })
  await new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', resolve)
  })
  const url = `http://127.0.0.1:${server.address().port}`
  return { url, close: () => new Promise(resolve => server.close(resolve)) }
}
