import { REVEAL } from '@constants'
import { canObserveVisible } from '@scripts/utils/canObserveVisible.js'
import { isReducedMotion } from '@scripts/utils/isReducedMotion.js'
import { observeVisible } from '@scripts/utils/observeVisible.js'

export class Reveal {
  #root
  #options
  #items

  constructor(root, options = {}) {
    this.#root = root
    this.#options = {
      rootMargin: REVEAL.rootMargin,
      maxIndex: REVEAL.maxIndex,
      ...options,
    }
    this.#items = root.querySelectorAll(REVEAL.itemSelector)
  }

  start() {
    const canAnimate = canObserveVisible() && !isReducedMotion()
    if (!canAnimate) return

    const belowItems = []

    for (const item of this.#items) {
      if (Reveal.#isOnFirstScreen(item)) {
        item.removeAttribute(REVEAL.hookName)
        continue
      }

      belowItems.push(item)
    }

    observeVisible(belowItems, (items) => this.#renderBatch(items), {
      rootMargin: this.#options.rootMargin,
    })
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
