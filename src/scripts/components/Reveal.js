import { VisibilityObserver } from '@scripts/services'
import { REVEAL } from '@constants'

export class Reveal {
  #root
  #options
  #items
  #observer

  constructor(root, options = {}) {
    this.#root = root
    this.#options = {
      rootMargin: REVEAL.rootMargin,
      maxIndex: REVEAL.maxIndex,
      ...options,
    }
    this.#items = root.querySelectorAll(REVEAL.itemSelector)
    this.#observer = null
  }

  start() {
    const canAnimate =
      VisibilityObserver.isSupported() && !VisibilityObserver.isReducedMotion()
    if (!canAnimate) return

    const belowItems = []

    for (const item of this.#items) {
      if (Reveal.#isOnFirstScreen(item)) {
        item.removeAttribute(REVEAL.hookName)
        continue
      }

      belowItems.push(item)
    }

    this.#observer = new VisibilityObserver(
      belowItems,
      (items) => this.#renderBatch(items),
      {
        rootMargin: this.#options.rootMargin,
      },
    )
    this.#observer.start()

    this.#root.classList.add(REVEAL.readyClass)
  }

  #renderBatch(items) {
    items.forEach((item, index) => this.#renderRevealed(item, index))
  }

  #renderRevealed(item, index) {
    const staggerIndex = Math.min(index, this.#options.maxIndex)

    item.style.setProperty(REVEAL.indexProperty, staggerIndex)
    item.classList.add(REVEAL.shownClass)
  }

  static #isOnFirstScreen(item) {
    const { top, height } = item.getBoundingClientRect()
    const isRendered = height > 0
    const isAboveFold = top < window.innerHeight

    return isRendered && isAboveFold
  }
}
