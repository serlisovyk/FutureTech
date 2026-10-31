import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './CounterPill.css'

export function CounterPill(props) {
  const {
    icon,
    label,
    count,
    likeKey,
    likedCount,
    isLiked = false,
    isLarge = false,
  } = props

  const isToggle = Boolean(likeKey)
  const classNames = clsx(
    'counter-pill',
    isLarge && 'counter-pill--large',
    isLiked && 'counter-pill--liked',
    isToggle && 'counter-pill--toggle',
  )
  const iconName = isLiked ? 'ui/heart-filled' : icon
  const iconClassNames = clsx(
    'counter-pill__icon',
    isToggle && 'counter-pill__icon--off',
  )
  const countHook = isToggle || undefined
  const content = (
    <>
      <Icon name={iconName} className={iconClassNames} />
      {isToggle && (
        <Icon
          name="ui/heart-filled"
          className="counter-pill__icon counter-pill__icon--on"
        />
      )}
      <span className="counter-pill__count">
        <span data-like-count={countHook}>{count}</span>
        <span className="visually-hidden"> {label}</span>
      </span>
    </>
  )

  if (isToggle) {
    return (
      <button
        className={classNames}
        type="button"
        aria-pressed="false"
        disabled
        data-like={likeKey}
        data-liked-count={likedCount}
      >
        {content}
      </button>
    )
  }

  return <span className={classNames}>{content}</span>
}
