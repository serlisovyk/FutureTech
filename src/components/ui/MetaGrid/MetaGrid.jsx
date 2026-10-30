import { clsx } from 'clsx'
import { MetaItem } from '@components/ui/MetaItem'
import './MetaGrid.css'

export function MetaGrid({ items, className, isCard = false }) {
  return (
    <dl className={clsx('meta-grid', className)}>
      {items.map(({ label, value }) => (
        <MetaItem key={label} label={label} value={value} isCard={isCard} />
      ))}
    </dl>
  )
}
