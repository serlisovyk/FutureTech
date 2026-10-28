import { clsx } from 'clsx'
import './MetaItem.css'

export function MetaItem({ label, value, isCard = false }) {
  return (
    <div className={clsx('meta-item', isCard && 'meta-item--card')}>
      <dt className="meta-item__label">{label}</dt>
      <dd className="meta-item__value">{value}</dd>
    </div>
  )
}
