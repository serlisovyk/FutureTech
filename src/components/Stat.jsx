import { clsx } from 'clsx'
import './Stat.css'

export function Stat({ value, label, isLarge = false }) {
  const number = value.replace(/\+$/, '')
  const hasPlus = number !== value

  return (
    <div className={clsx('stat', isLarge && 'stat--large')}>
      <p className="stat__value">
        {number}
        {hasPlus && <span className="stat__plus">+</span>}
      </p>
      <p className="stat__label">{label}</p>
    </div>
  )
}
