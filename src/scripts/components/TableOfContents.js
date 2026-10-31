import { MEDIA, SELECTORS, TABLE_OF_CONTENTS } from '@scripts/constants.js'

export class TableOfContents {
  #root
  #options
  #links
  #targets
  #visibleTargets
  #currentLink
  #handleNavigate

  constructor(root, options = {}) {
    this.#root = root
    this.#options = {
      scope: root.ownerDocument,
      rootMargin: TABLE_OF_CONTENTS.rootMargin,
      ...options,
    }
    this.#links = [...root.querySelectorAll(SELECTORS.tableOfContentsLink)]
    this.#targets = new Map(
      this.#links.map((link) => [link, this.#findTarget(link)]),
    )
    this.#visibleTargets = new Set()
    this.#currentLink = null
    this.#handleNavigate = () => {}
  }

  start() {
    this.#root.addEventListener('click', (event) => this.#handleClick(event))

    this.#observeTargets()
  }

  onNavigate(handler) {
    this.#handleNavigate = handler
  }

  #findTarget(link) {
    const id = link.hash.replace(/^#/, '')

    return this.#options.scope.querySelector(`[id="${CSS.escape(id)}"]`)
  }

  #handleClick(event) {
    const link = event.target.closest(SELECTORS.tableOfContentsLink)
    const target = this.#targets.get(link)
    if (!target) return

    event.preventDefault()
    this.#handleNavigate(target)

    this.#renderScroll(target)
    this.#renderHash(link.hash)
  }

  #renderScroll(target) {
    const isReducedMotion = window.matchMedia(MEDIA.reducedMotion).matches
    const behavior = isReducedMotion ? 'auto' : 'smooth'

    target.scrollIntoView({ behavior })
    target.focus({ preventScroll: true })
  }

  #renderHash(hash) {
    if (window.location.hash === hash) return

    window.history.pushState(null, '', hash)
  }

  #observeTargets() {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => this.#handleIntersect(entries),
      { rootMargin: this.#options.rootMargin },
    )

    for (const target of this.#targets.values()) {
      observer.observe(target)
    }
  }

  #handleIntersect(entries) {
    for (const { target, isIntersecting } of entries) {
      this.#renderVisible(target, isIntersecting)
    }

    const currentLink = this.#links.findLast((link) =>
      this.#visibleTargets.has(this.#targets.get(link)),
    )
    if (!currentLink) return

    this.#renderCurrent(currentLink)
  }

  #renderVisible(target, isVisible) {
    if (isVisible) {
      this.#visibleTargets.add(target)
      return
    }

    this.#visibleTargets.delete(target)
  }

  #renderCurrent(currentLink) {
    this.#currentLink?.removeAttribute('aria-current')
    currentLink.setAttribute('aria-current', TABLE_OF_CONTENTS.currentValue)
    this.#currentLink = currentLink
  }
}
