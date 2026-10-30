import { COUNT_UP, MEDIA } from '@scripts/constants.js'

export class CountUp {
  #options
  #number
  #parts
  #observer

  constructor(root, options = {}) {
    this.#options = {
      duration: COUNT_UP.duration,
      threshold: COUNT_UP.threshold,
      ...options,
    }
    this.#number = root.querySelector('[data-count-up-number]')
    this.#parts = COUNT_UP.numberPattern.exec(this.#number.textContent.trim())
    this.#observer = null
  }

  start() {
    const isCountable = this.#parts !== null
    const isReducedMotion = window.matchMedia(MEDIA.reducedMotion).matches
    const canObserve = 'IntersectionObserver' in window
    if (!isCountable || isReducedMotion || !canObserve) return

    this.#renderValue(0)

    this.#observer = new IntersectionObserver(
      (entries) => this.#handleIntersect(entries),
      { threshold: this.#options.threshold },
    )
    this.#observer.observe(this.#number)
  }

  #handleIntersect(entries) {
    const isVisible = entries.some((entry) => entry.isIntersecting)
    if (!isVisible) return

    this.#observer.disconnect()
    requestAnimationFrame((startTime) => this.#renderFrame(startTime, startTime))
  }

  #renderFrame(startTime, now) {
    const [, digits] = this.#parts
    const progress = Math.min((now - startTime) / this.#options.duration, 1)
    const easedProgress = 1 - (1 - progress) ** COUNT_UP.easingPower

    this.#renderValue(Math.round(Number(digits) * easedProgress))
    if (progress === 1) return

    requestAnimationFrame((nextTime) => this.#renderFrame(startTime, nextTime))
  }

  #renderValue(value) {
    const [, , suffix] = this.#parts

    this.#number.textContent = `${value}${suffix}`
  }
}
