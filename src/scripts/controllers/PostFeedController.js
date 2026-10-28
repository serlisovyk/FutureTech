import { Tabs } from '@scripts/components/Tabs.js'
import { ALL_CATEGORY, SELECTORS } from '@scripts/constants.js'

export class PostFeedController {
  #tabs
  #rows
  #panel
  #empty
  #status
  #shouldAnnounce

  constructor(root) {
    this.#tabs = new Tabs(root)
    this.#rows = [...root.querySelectorAll(SELECTORS.postFeedRow)]
    this.#panel = root.querySelector(SELECTORS.postFeedPanel)
    this.#empty = root.querySelector(SELECTORS.postFeedEmpty)
    this.#status = root.querySelector(SELECTORS.postFeedStatus)
    this.#shouldAnnounce = false
  }

  start() {
    this.#tabs.onSelect((selectedTab) => this.#handleSelect(selectedTab))
    this.#tabs.start()

    this.#shouldAnnounce = true
  }

  #handleSelect(selectedTab) {
    this.#renderRows(selectedTab.dataset.tab)
    this.#renderPanelLabel(selectedTab.id)
    this.#renderStatus(selectedTab.dataset.status)
  }

  #renderRows(selectedKey) {
    for (const row of this.#rows) {
      const isShown =
        selectedKey === ALL_CATEGORY || row.dataset.category === selectedKey

      row.hidden = !isShown
    }

    this.#empty.hidden = this.#rows.some((row) => !row.hidden)
  }

  #renderPanelLabel(tabId) {
    this.#panel.setAttribute('aria-labelledby', tabId)
  }

  #renderStatus(text) {
    if (!this.#shouldAnnounce) return

    this.#status.textContent = text
  }
}
