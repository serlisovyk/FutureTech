import { Disclosure } from '@scripts/components/Disclosure.js'
import { TableOfContents } from '@scripts/components/TableOfContents.js'
import { SELECTORS } from '@scripts/constants.js'

export class ArticleController {
  #root
  #region
  #disclosure
  #contents

  constructor(root) {
    this.#root = root
    this.#region = root.querySelector(SELECTORS.disclosureRegion)
    this.#disclosure = null
    this.#contents = new TableOfContents(
      root.querySelector(SELECTORS.tableOfContents),
      { scope: root },
    )

    const hasRegion = this.#region !== null
    if (hasRegion) {
      this.#disclosure = new Disclosure(root.querySelector(SELECTORS.articleBody))
    }
  }

  start() {
    this.#startDisclosure()

    this.#contents.onNavigate((target) => this.#openFor(target))
    this.#contents.start()
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
    if (!target || !this.#isCollapsed(target)) return

    this.#openFor(target)
    target.scrollIntoView()
    target.focus({ preventScroll: true })
  }

  #openFor(target) {
    if (!this.#isCollapsed(target)) return

    this.#disclosure.open()
  }

  #isCollapsed(target) {
    if (!this.#disclosure) return false

    const isInRegion = this.#region.contains(target)

    return isInRegion && !this.#disclosure.isOpen
  }

  #findHashTarget() {
    const id = window.location.hash.replace(/^#/, '')

    return this.#root.querySelector(`[id="${CSS.escape(id)}"]`)
  }
}
