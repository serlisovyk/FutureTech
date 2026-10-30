import { clsx } from 'clsx'
import './Stat.css'

export function Stat({ value, label, isLarge = false }) {
  const number = value.replace(/\+$/, '')
  const hasPlus = number !== value

  return (
    <div className={clsx('stat', isLarge && 'stat--large')}>
      <p className="stat__value" data-count-up>
        <span aria-hidden="true">
          <span data-count-up-number>{number}</span>
          {hasPlus && <span className="stat__plus">+</span>}
        </span>
        <span className="visually-hidden">{value}</span>
      </p>
      <p className="stat__label">{label}</p>
    </div>
  )
}
