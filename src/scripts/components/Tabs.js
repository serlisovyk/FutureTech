import { ARIA, KEYS, NO_INDEX, SELECTORS, TAB_INDEX } from '@constants'

export class Tabs {
  #tabList
  #tabs
  #panels
  #handleSelect

  constructor(root) {
    this.#tabList = root.querySelector(SELECTORS.tabList)
    this.#tabs = [...root.querySelectorAll(SELECTORS.tab)]
    this.#panels = [...root.querySelectorAll(SELECTORS.tabPanel)]
    this.#handleSelect = () => {}
  }

  start() {
    const selectedTab = this.#tabs.find(
      (tab) => tab.getAttribute(ARIA.selected) === 'true',
    )

    const hashTab = this.#findHashTab()

    this.select(hashTab ?? selectedTab ?? this.#tabs[0])

    this.#tabList.addEventListener('click', (event) => this.#handleClick(event))
    this.#tabList.addEventListener('keydown', (event) => this.#handleKeydown(event))
    window.addEventListener('hashchange', () => this.#handleHashChange())
  }

  onSelect(handler) {
    this.#handleSelect = handler
  }

  select(selectedTab, shouldFocus = false) {
    this.#renderTabs(selectedTab)
    this.#renderPanels(selectedTab.dataset.tab)
    this.#handleSelect(selectedTab)

    if (shouldFocus) selectedTab.focus()
  }

  #handleClick(event) {
    const selectedTab = event.target.closest(SELECTORS.tab)
    if (!selectedTab) return

    this.#choose(selectedTab)
  }

  #handleHashChange() {
    const hashTab = this.#findHashTab()
    if (!hashTab) return

    this.select(hashTab)
    this.#findPanel(hashTab.dataset.tab)?.scrollIntoView()
  }

  #handleKeydown(event) {
    const { key, altKey, ctrlKey, metaKey, shiftKey } = event

    const hasModifier = altKey || ctrlKey || metaKey || shiftKey

    const currentTab = event.target.closest(SELECTORS.tab)
    if (hasModifier || !currentTab) return

    const currentIndex = this.#tabs.indexOf(currentTab)

    const targetIndex = this.#findIndexForKey(key, currentIndex)
    if (targetIndex === NO_INDEX) return

    event.preventDefault()
    this.#choose(this.#tabs[targetIndex], true)
  }

  #choose(selectedTab, shouldFocus = false) {
    this.select(selectedTab, shouldFocus)
    this.#renderHash(selectedTab)
  }

  #renderHash(selectedTab) {
    const panel = this.#findPanel(selectedTab.dataset.tab)
    if (!panel) return

    window.history.replaceState(window.history.state, '', `#${panel.id}`)
  }

  #findHashTab() {
    const { hash } = window.location

    return this.#tabs.find(
      (tab) =>
        hash === `#${tab.id}` || hash === `#${tab.getAttribute(ARIA.controls)}`,
    )
  }

  #findPanel(key) {
    return this.#panels.find((panel) => panel.dataset.tabPanel === key)
  }

  #findIndexForKey(key, currentIndex) {
    if (key === KEYS.home) return 0
    if (key === KEYS.end) return this.#tabs.length - 1
    if (key === KEYS.arrowRight) return this.#stepIndex(currentIndex, 1)
    if (key === KEYS.arrowLeft) return this.#stepIndex(currentIndex, -1)

    return NO_INDEX
  }

  #stepIndex(currentIndex, step) {
    const tabCount = this.#tabs.length

    return (currentIndex + step + tabCount) % tabCount
  }

  #renderTabs(selectedTab) {
    for (const tab of this.#tabs) {
      const isSelected = tab === selectedTab

      tab.setAttribute(ARIA.selected, String(isSelected))
      tab.tabIndex = isSelected ? TAB_INDEX.selected : TAB_INDEX.unselected
    }
  }

  #renderPanels(selectedKey) {
    for (const panel of this.#panels) {
      panel.hidden = panel.dataset.tabPanel !== selectedKey
    }
  }
}
