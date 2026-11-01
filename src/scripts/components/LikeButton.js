import { SELECTORS, STORAGE } from '@constants'
import { readStorage, removeStorage, writeStorage } from '@scripts/utils/storage.js'

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
    const storedValue = readStorage(this.#storageKey)

    this.#isLiked = storedValue === STORAGE.likedValue
    this.#renderLiked()
    this.#root.disabled = false

    this.#root.addEventListener('click', () => this.toggle())
  }

  toggle() {
    this.#isLiked = !this.#isLiked
    this.#renderLiked()
    this.#storeLiked()
  }

  #renderLiked() {
    const count = this.#isLiked ? this.#likedCount : this.#unlikedCount

    this.#root.setAttribute('aria-pressed', String(this.#isLiked))
    this.#count.textContent = count
  }

  #storeLiked() {
    if (this.#isLiked) {
      writeStorage(this.#storageKey, STORAGE.likedValue)
      return
    }

    removeStorage(this.#storageKey)
  }
}
