export class Disclosure {
  #options
  #trigger
  #region
  #label
  #isOpen

  constructor(root, options = {}) {
    this.#options = { labels: null, ...options }
    this.#trigger = root.querySelector('[data-disclosure-trigger]')
    this.#region = root.querySelector('[data-disclosure-region]')
    this.#label = root.querySelector('[data-disclosure-label]')
    this.#isOpen = this.#trigger.getAttribute('aria-expanded') === 'true'
  }

  get isOpen() {
    return this.#isOpen
  }

  start() {
    this.#renderExpanded()

    this.#trigger.addEventListener('click', () => this.toggle())
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

  #renderExpanded() {
    this.#trigger.setAttribute('aria-expanded', String(this.#isOpen))
    this.#region.hidden = !this.#isOpen

    this.#renderLabel()
  }

  #renderLabel() {
    const { labels } = this.#options
    if (!labels || !this.#label) return

    this.#label.textContent = this.#isOpen ? labels.whenOpen : labels.whenClosed
  }
}
