import { SectionHeading } from '@components'
import { resourceLibrary, resourceTabs } from '@data/resources.js'
import { ResourcePanel } from './ResourcePanel.jsx'
import './ResourceLibrary.css'

export function ResourceLibrary() {
  const { id, titleId, tag, title, tabListLabel } = resourceLibrary

  return (
    <section
      className="resource-library"
      id={id}
      aria-labelledby={titleId}
      data-tabs
    >
      <SectionHeading tag={tag} title={title} titleId={titleId}>
        <div
          className="resource-library__tabs"
          role="tablist"
          aria-label={tabListLabel}
          data-tab-list
        >
          {resourceTabs.map((resourceTab, index) => {
            const { id: panelId, tabId, label } = resourceTab
            const isSelected = index === 0
            const tabIndex = isSelected ? 0 : -1

            return (
              <button
                key={panelId}
                className="resource-library__tab"
                type="button"
                role="tab"
                id={tabId}
                aria-selected={isSelected}
                aria-controls={panelId}
                tabIndex={tabIndex}
                data-tab={panelId}
              >
                {label}
              </button>
            )
          })}
        </div>
      </SectionHeading>

      {resourceTabs.map(({ id: panelId, tabId, label, items }) => (
        <ResourcePanel
          key={panelId}
          id={panelId}
          tabId={tabId}
          label={label}
          items={items}
        />
      ))}
    </section>
  )
}
