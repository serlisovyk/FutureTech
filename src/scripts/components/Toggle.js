import { ARIA, KEYS, SELECTORS } from '@constants'

export class Toggle {
  #root
  #button
  #target
  #isOpen
  #handleToggle

  constructor(root) {
    this.#root = root
    this.#button = root.querySelector(SELECTORS.toggleButton)
    this.#target = root.querySelector(SELECTORS.toggleTarget)
    this.#isOpen = this.#button.getAttribute(ARIA.expanded) === 'true'
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
    const isDismiss = event.target.closest(SELECTORS.toggleDismiss)
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
    this.#button.setAttribute(ARIA.expanded, String(this.#isOpen))
    this.#target.hidden = !this.#isOpen

    this.#handleToggle(this.#isOpen)
  }
}
