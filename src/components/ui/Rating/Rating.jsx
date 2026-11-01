import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import { getRatingLabel } from '@utils'
import './Rating.css'

export function Rating({ value, className, isCompact = false }) {
  const label = getRatingLabel(value)

  const stars = Array.from({ length: value }, (_, index) => index)

  return (
    <p className={clsx('rating', isCompact && 'rating--compact', className)}>
      {stars.map((star) => (
        <Icon key={star} name="ui/star" className="rating__star" />
      ))}
      <span className="visually-hidden">{label}</span>
    </p>
  )
}
