import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './Button.css'

export function Button({
  icon,
  href,
  ariaCurrent,
  videoId,
  videoTitle,
  className,
  children,
  isToggleDismiss = false,
  variant = 'primary',
  type = 'button',
  isSmall = false,
}) {
  const classNames = clsx(
    'button',
    `button--${variant}`,
    isSmall && 'button--small',
    className,
  )
  const toggleDismiss = isToggleDismiss || undefined
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="button__icon" />}
    </>
  )

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        aria-current={ariaCurrent}
        data-toggle-dismiss={toggleDismiss}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={classNames}
      type={type}
      data-toggle-dismiss={toggleDismiss}
      data-video-id={videoId}
      data-video-title={videoTitle}
    >
      {content}
    </button>
  )
}
