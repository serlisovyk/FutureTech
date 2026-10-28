import { KEYS } from '../constants.js'

export class Toggle {
  #root
  #options
  #button
  #target
  #isOpen

  constructor(root, options = {}) {
    this.#root = root
    this.#options = { labels: null, ...options }
    this.#button = root.querySelector('[data-toggle-button]')
    this.#target = root.querySelector('[data-toggle-target]')
    this.#isOpen = this.#button.getAttribute('aria-expanded') === 'true'
  }

  get isOpen() {
    return this.#isOpen
  }

  start() {
    this.#renderExpanded()

    this.#button.addEventListener('click', () => this.toggle())
    this.#root.addEventListener('keydown', (event) => this.#handleKeydown(event))
  }

  open() {
    this.#isOpen = true
    this.#renderExpanded()
  }

  close() {
    this.#isOpen = false
    this.#renderExpanded()
  }

  toggle() {
    if (this.#isOpen) {
      this.close()
      return
    }

    this.open()
  }

  #handleKeydown(event) {
    if (event.key !== KEYS.escape || !this.#isOpen) return

    this.close()
    this.#button.focus()
  }

  #renderExpanded() {
    this.#button.setAttribute('aria-expanded', String(this.#isOpen))
    this.#target.hidden = !this.#isOpen

    this.#renderLabel()
  }

  #renderLabel() {
    const { labels } = this.#options
    if (!labels) return

    const label = this.#isOpen ? labels.whenOpen : labels.whenClosed

    this.#button.setAttribute('aria-label', label)
  }
}
