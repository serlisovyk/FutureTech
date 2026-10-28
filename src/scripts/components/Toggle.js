import { KEYS } from '@scripts/constants.js'

export class Toggle {
  #root
  #options
  #button
  #target
  #isOpen
  #handleToggle

  constructor(root, options = {}) {
    this.#root = root
    this.#options = { labels: null, ...options }
    this.#button = root.querySelector('[data-toggle-button]')
    this.#target = root.querySelector('[data-toggle-target]')
    this.#isOpen = this.#button.getAttribute('aria-expanded') === 'true'
    this.#handleToggle = () => {}
  }

  get isOpen() {
    return this.#isOpen
  }

  start() {
    this.#renderExpanded()

    this.#button.addEventListener('click', () => this.toggle())
    this.#root.addEventListener('click', (event) => this.#handleClick(event))
    this.#root.addEventListener('keydown', (event) => this.#handleKeydown(event))
  }

  onToggle(handler) {
    this.#handleToggle = handler
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

  #handleClick(event) {
    const isDismiss = event.target.closest('[data-toggle-dismiss]')
    if (!isDismiss || !this.#isOpen) return

    this.#closeToButton()
  }

  #handleKeydown(event) {
    if (event.key !== KEYS.escape || !this.#isOpen) return

    this.#closeToButton()
  }

  #closeToButton() {
    this.close()
    this.#button.focus()
  }

  #renderExpanded() {
    this.#button.setAttribute('aria-expanded', String(this.#isOpen))
    this.#target.hidden = !this.#isOpen

    this.#renderLabel()
    this.#handleToggle(this.#isOpen)
  }

  #renderLabel() {
    const { labels } = this.#options
    if (!labels) return

    const label = this.#isOpen ? labels.whenOpen : labels.whenClosed

    this.#button.setAttribute('aria-label', label)
  }
}
