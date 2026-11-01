import { Tag } from '@components'
import { ResourceRow } from '../ResourceRow'
import './ResourcePanel.css'

export function ResourcePanel({ id, tabId, label, items }) {
  return (
    <div
      className="resource-panel"
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
      data-tab-panel={id}
    >
      <p className="resource-panel__label container">
        <Tag>{label}</Tag>
      </p>

      {items.map(({ id: itemId, ...item }) => (
        <ResourceRow key={itemId} {...item} />
      ))}
    </div>
  )
}
