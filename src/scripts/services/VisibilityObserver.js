import { MEDIA } from '@constants'

export class VisibilityObserver {
  #elements
  #onVisible
  #options
  #observer

  constructor(elements, onVisible, options = {}) {
    this.#elements = elements
    this.#onVisible = onVisible
    this.#options = options
    this.#observer = null
  }

  static isSupported() {
    return window.IntersectionObserver !== undefined
  }

  static isReducedMotion() {
    const query = window.matchMedia(MEDIA.reducedMotion)

    return query.matches
  }

  start() {
    if (!VisibilityObserver.isSupported()) return

    this.#observer = new IntersectionObserver(
      (entries) => this.#handleEntries(entries),
      this.#options,
    )
    this.#elements.forEach((element) => this.#observer.observe(element))
  }

  stop() {
    if (this.#observer === null) return

    this.#observer.disconnect()
    this.#observer = null
  }

  #handleEntries(entries) {
    const visibleElements = entries
      .filter(({ isIntersecting }) => isIntersecting)
      .map(({ target }) => target)

    const isNoneVisible = visibleElements.length === 0
    if (isNoneVisible) return

    visibleElements.forEach((element) => this.#observer.unobserve(element))
    this.#onVisible(visibleElements)
  }
}
