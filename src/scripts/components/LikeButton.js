import { ARIA, SELECTORS, STORAGE } from '@constants'
import { StorageItem } from '@scripts/services'

export class LikeButton {
  #root
  #count
  #storage
  #unlikedCount
  #likedCount
  #isLiked

  constructor(root) {
    const { like, likedCount } = root.dataset

    this.#root = root
    this.#count = root.querySelector(SELECTORS.likeCount)
    this.#storage = new StorageItem(`${STORAGE.likePrefix}${like}`)
    this.#unlikedCount = this.#count.textContent
    this.#likedCount = likedCount
    this.#isLiked = false
  }

  start() {
    const storedValue = this.#storage.read()

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

    this.#root.setAttribute(ARIA.pressed, String(this.#isLiked))
    this.#count.textContent = count
  }

  #storeLiked() {
    if (this.#isLiked) {
      this.#storage.write(STORAGE.likedValue)
      return
    }

    this.#storage.remove()
  }
}
