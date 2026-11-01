import { ARIA, SELECTORS } from '@constants'

export class Disclosure {
  #trigger
  #region
  #isOpen
  #handleToggle

  constructor(root) {
    this.#trigger = root.querySelector(SELECTORS.disclosureTrigger)
    this.#region = root.querySelector(SELECTORS.disclosureRegion)
    this.#isOpen = this.#trigger.getAttribute(ARIA.expanded) === 'true'
    this.#handleToggle = () => {}
  }

  get isOpen() {
    return this.#isOpen
  }

  start() {
    this.#renderExpanded()

    this.#trigger.addEventListener('click', () => this.toggle())
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

  #renderExpanded() {
    this.#trigger.setAttribute(ARIA.expanded, String(this.#isOpen))
    this.#region.hidden = !this.#isOpen

    this.#handleToggle(this.#isOpen)
  }
}
