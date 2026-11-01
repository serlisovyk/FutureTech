export function readStorage(key, fallback = null) {
  try {
    const value = window.localStorage.getItem(key)
    if (value === null) return fallback

    return value
  } catch {
    return fallback
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value)

    return true
  } catch {
    return false
  }
}

export function removeStorage(key) {
  try {
    window.localStorage.removeItem(key)

    return true
  } catch {
    return false
  }
}
