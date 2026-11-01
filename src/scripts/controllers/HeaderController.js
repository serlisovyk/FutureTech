import { Toggle } from '@scripts/components/Toggle.js'
import { MEDIA, SELECTORS } from '@constants'

export class HeaderController {
  #toggle
  #menu
  #closeButton
  #firstLink
  #mobileQuery

  constructor(root) {
    this.#toggle = new Toggle(root)
    this.#menu = root.querySelector(SELECTORS.toggleTarget)
    this.#closeButton = root.querySelector(SELECTORS.headerClose)
    this.#firstLink = root.querySelector(SELECTORS.headerLink)
    this.#mobileQuery = window.matchMedia(MEDIA.mobileMenu)
  }

  start() {
    this.#toggle.onToggle((isOpen) => this.#renderModal(isOpen))
    this.#toggle.start()

    this.#mobileQuery.addEventListener('change', () => this.#handleViewportChange())
  }

  #handleViewportChange() {
    const isDrawerOpenOnDesktop = !this.#mobileQuery.matches && this.#toggle.isOpen
    if (!isDrawerOpenOnDesktop) return

    this.#toggle.close()
    this.#firstLink.focus()
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
