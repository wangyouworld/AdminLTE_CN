/**
 * Shared vitest setup. happy-dom does not implement the Web Storage API, so
 * persistence code paths (ColorMode, PushMenu) get a minimal in-memory
 * localStorage. The production code treats missing storage as non-fatal, but
 * the tests need to observe what gets persisted.
 */

const store = new Map<string, string>()

const memoryStorage: Storage = {
  get length() {
    return store.size
  },
  clear() {
    store.clear()
  },
  getItem(key: string) {
    return store.get(key) ?? null
  },
  key(index: number) {
    return store.keys().toArray()[index] ?? null
  },
  removeItem(key: string) {
    store.delete(key)
  },
  setItem(key: string, value: string) {
    store.set(key, value)
  }
}

if (globalThis.localStorage === undefined) {
  Object.defineProperty(globalThis, 'localStorage', {
    value: memoryStorage,
    writable: true
  })
}
