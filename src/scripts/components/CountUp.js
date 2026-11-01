import { COUNT_UP } from '@constants'
import { canObserveVisible, isReducedMotion, observeVisible } from '@scripts/utils'

export class CountUp {
  #options
  #number
  #parts

  constructor(root, options = {}) {
    this.#options = {
      duration: COUNT_UP.duration,
      threshold: COUNT_UP.threshold,
      ...options,
    }
    this.#number = root.querySelector('[data-count-up-number]')
    this.#parts = COUNT_UP.numberPattern.exec(this.#number.textContent.trim())
  }

  start() {
    const isCountable = this.#parts !== null
    const canAnimate = canObserveVisible() && !isReducedMotion()
    if (!isCountable || !canAnimate) return

    this.#renderValue(0)

    observeVisible([this.#number], () => this.#startCounting(), {
      threshold: this.#options.threshold,
    })
  }

  #startCounting() {
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
