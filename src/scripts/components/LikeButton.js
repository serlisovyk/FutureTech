import { SELECTORS, STORAGE } from '@scripts/constants.js'

export class LikeButton {
  #root
  #count
  #storageKey
  #unlikedCount
  #likedCount
  #isLiked

  constructor(root) {
    this.#root = root
    this.#count = root.querySelector(SELECTORS.likeCount)
    this.#storageKey = `${STORAGE.likePrefix}${root.dataset.like}`
    this.#unlikedCount = this.#count.textContent
    this.#likedCount = root.dataset.likedCount
    this.#isLiked = false
  }

  get isLiked() {
    return this.#isLiked
  }

  start() {
    this.#isLiked = this.#readStorage()
    this.#renderLiked()
    this.#root.disabled = false

    this.#root.addEventListener('click', () => this.toggle())
  }

  toggle() {
    this.#isLiked = !this.#isLiked
    this.#renderLiked()
    this.#writeStorage()
  }

  #renderLiked() {
    const count = this.#isLiked ? this.#likedCount : this.#unlikedCount

    this.#root.setAttribute('aria-pressed', String(this.#isLiked))
    this.#count.textContent = count
  }

  #readStorage() {
    try {
      return window.localStorage.getItem(this.#storageKey) === STORAGE.likedValue
    } catch {
      return false
    }
  }

  #writeStorage() {
    try {
      if (this.#isLiked) {
        window.localStorage.setItem(this.#storageKey, STORAGE.likedValue)
        return
      }

      window.localStorage.removeItem(this.#storageKey)
    } catch {
      return
    }
  }
}
