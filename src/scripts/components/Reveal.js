import { MEDIA, REVEAL } from '@scripts/constants.js'

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
    const isReducedMotion = window.matchMedia(MEDIA.reducedMotion).matches
    const canObserve = 'IntersectionObserver' in window
    if (isReducedMotion || !canObserve) return

    this.#observer = new IntersectionObserver(
      (entries) => this.#handleIntersect(entries),
      { rootMargin: this.#options.rootMargin },
    )

    for (const item of this.#items) {
      if (Reveal.#isOnFirstScreen(item)) {
        item.removeAttribute(REVEAL.hookName)
        continue
      }

      this.#observer.observe(item)
    }

    this.#root.classList.add(REVEAL.readyClass)
  }

  #handleIntersect(entries) {
    const visibleEntries = entries.filter((entry) => entry.isIntersecting)

    visibleEntries.forEach(({ target }, index) => {
      this.#renderRevealed(target, index)
    })
  }

  #renderRevealed(item, index) {
    const staggerIndex = Math.min(index, this.#options.maxIndex)

    item.style.setProperty(REVEAL.indexProperty, staggerIndex)
    item.classList.add(REVEAL.shownClass)
    this.#observer.unobserve(item)
  }

  static #isOnFirstScreen(item) {
    const { top, height } = item.getBoundingClientRect()
    const isRendered = height > 0
    const isAboveFold = top < window.innerHeight

    return isRendered && isAboveFold
  }
}
