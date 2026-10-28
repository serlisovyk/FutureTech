import { MetaItem } from '@components/ui/MetaItem'
import './MetaGrid.css'

export function MetaGrid({ items, isCard = false }) {
  return (
    <dl className="meta-grid">
      {items.map(({ label, value }) => (
        <MetaItem key={label} label={label} value={value} isCard={isCard} />
      ))}
    </dl>
  )
}
