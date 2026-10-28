import { Toggle } from '@scripts/components/Toggle.js'
import { MEDIA } from '@scripts/constants.js'

export class HeaderController {
  #toggle
  #menu
  #closeButton
  #mobileQuery

  constructor(root) {
    this.#toggle = new Toggle(root)
    this.#menu = root.querySelector('[data-toggle-target]')
    this.#closeButton = root.querySelector('[data-header-close]')
    this.#mobileQuery = window.matchMedia(MEDIA.mobileMenu)
  }

  start() {
    this.#toggle.onToggle((isOpen) => this.#renderModal(isOpen))
    this.#toggle.start()

    this.#mobileQuery.addEventListener('change', () => this.#handleViewportChange())
  }

  #handleViewportChange() {
    if (this.#mobileQuery.matches) return

    this.#toggle.close()
  }

  #renderModal(isOpen) {
    this.#renderInert(isOpen)

    if (isOpen) this.#closeButton.focus()
  }

  #renderInert(isInert) {
    let branch = this.#menu

    while (branch !== document.body) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch) sibling.inert = isInert
      }

      branch = branch.parentElement
    }
  }
}
