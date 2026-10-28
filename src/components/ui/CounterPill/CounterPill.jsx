import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './CounterPill.css'

export function CounterPill({ icon, label, count, isLiked = false }) {
  return (
    <span className={clsx('counter-pill', isLiked && 'counter-pill--liked')}>
      <Icon
        name={isLiked ? 'ui/heart-filled' : icon}
        className="counter-pill__icon"
      />
      <span className="counter-pill__count">
        {count}
        <span className="visually-hidden"> {label}</span>
      </span>
    </span>
  )
}
