import { MetaItem } from './MetaItem.jsx'
import './MetaGrid.css'

export function MetaGrid({ items, isCard = false }) {
  return (
    <dl className="meta-grid">
      {items.map((item) => (
        <MetaItem
          key={item.label}
          label={item.label}
          value={item.value}
          isCard={isCard}
        />
      ))}
    </dl>
  )
}
