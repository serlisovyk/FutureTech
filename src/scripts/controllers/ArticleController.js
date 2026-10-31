import { Disclosure } from '@scripts/components/Disclosure.js'
import { SELECTORS } from '@scripts/constants.js'

export class ArticleController {
  #root
  #region
  #disclosure

  constructor(root) {
    this.#root = root
    this.#region = root.querySelector(SELECTORS.disclosureRegion)
    this.#disclosure = null

    const hasRegion = this.#region !== null
    if (hasRegion) {
      this.#disclosure = new Disclosure(root.querySelector(SELECTORS.articleBody))
    }
  }

  start() {
    this.#startDisclosure()
  }

  #startDisclosure() {
    if (!this.#disclosure) return

    this.#disclosure.onToggle((isOpen) => this.#handleToggle(isOpen))
    this.#disclosure.start()

    window.addEventListener('hashchange', () => this.#revealHashTarget())
    this.#revealHashTarget()
  }

  #handleToggle(isOpen) {
    if (!isOpen) return

    this.#region
      .querySelector(SELECTORS.articleSection)
      .focus({ preventScroll: true })
  }

  #revealHashTarget() {
    const target = this.#findHashTarget()
    const isCollapsed = target !== null && this.#region.contains(target)
    const isClosed = !this.#disclosure.isOpen
    if (!isCollapsed || !isClosed) return

    this.#disclosure.open()
    target.scrollIntoView()
    target.focus({ preventScroll: true })
  }

  #findHashTarget() {
    const id = window.location.hash.replace(/^#/, '')

    return this.#root.querySelector(`[id="${CSS.escape(id)}"]`)
  }
}
