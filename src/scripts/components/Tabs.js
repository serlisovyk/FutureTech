import { KEYS, NO_INDEX } from '@scripts/constants.js'

export class Tabs {
  #options
  #tabList
  #tabs
  #panels
  #handleSelect

  constructor(root, options = {}) {
    this.#options = { shouldWrap: true, ...options }
    this.#tabList = root.querySelector('[data-tab-list]')
    this.#tabs = [...root.querySelectorAll('[data-tab]')]
    this.#panels = [...root.querySelectorAll('[data-tab-panel]')]
    this.#handleSelect = () => {}
  }

  start() {
    const selectedTab = this.#tabs.find(
      (tab) => tab.getAttribute('aria-selected') === 'true',
    )

    this.select(selectedTab ?? this.#tabs[0])

    this.#tabList.addEventListener('click', (event) => this.#handleClick(event))
    this.#tabList.addEventListener('keydown', (event) => this.#handleKeydown(event))
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
    const selectedTab = event.target.closest('[data-tab]')
    if (!selectedTab) return

    this.select(selectedTab)
  }

  #handleKeydown(event) {
    const currentTab = event.target.closest('[data-tab]')
    if (!currentTab) return

    const currentIndex = this.#tabs.indexOf(currentTab)
    const targetIndex = this.#findIndexForKey(event.key, currentIndex)
    if (targetIndex === NO_INDEX) return

    event.preventDefault()
    this.select(this.#tabs[targetIndex], true)
  }

  #findIndexForKey(key, currentIndex) {
    if (key === KEYS.home) return 0
    if (key === KEYS.end) return this.#tabs.length - 1
    if (key === KEYS.arrowRight) return this.#stepIndex(currentIndex, 1)
    if (key === KEYS.arrowLeft) return this.#stepIndex(currentIndex, -1)

    return NO_INDEX
  }

  #stepIndex(currentIndex, step) {
    const { shouldWrap } = this.#options
    const tabCount = this.#tabs.length
    const nextIndex = currentIndex + step
    const wrappedIndex = (nextIndex + tabCount) % tabCount
    const clampedIndex = Math.min(Math.max(nextIndex, 0), tabCount - 1)

    if (shouldWrap) return wrappedIndex

    return clampedIndex
  }

  #renderTabs(selectedTab) {
    for (const tab of this.#tabs) {
      const isSelected = tab === selectedTab

      tab.setAttribute('aria-selected', String(isSelected))
      tab.tabIndex = isSelected ? 0 : -1
    }
  }

  #renderPanels(selectedKey) {
    for (const panel of this.#panels) {
      panel.hidden = panel.dataset.tabPanel !== selectedKey
    }
  }
}
