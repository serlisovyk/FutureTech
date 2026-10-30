import { Tag } from '@components'
import { ResourceRow } from './ResourceRow.jsx'
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

      {items.map((item) => {
        const { id: itemId, titleId, icon, title, lead, text, image, meta } = item

        return (
          <ResourceRow
            key={itemId}
            titleId={titleId}
            icon={icon}
            title={title}
            lead={lead}
            text={text}
            image={image}
            meta={meta}
          />
        )
      })}
    </div>
  )
}
