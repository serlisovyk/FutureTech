export class StorageItem {
  #key

  constructor(key) {
    this.#key = key
  }

  read(fallback = null) {
    const value = this.#access((storage) => storage.getItem(this.#key))
    if (value === null) return fallback

    return value
  }

  write(value) {
    this.#access((storage) => storage.setItem(this.#key, value))
  }

  remove() {
    this.#access((storage) => storage.removeItem(this.#key))
  }

  #access(action, fallback = null) {
    try {
      return action(window.localStorage)
    } catch {
      return fallback
    }
  }
}
