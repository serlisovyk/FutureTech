import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './Button.css'

export function Button(props) {
  const {
    icon,
    href,
    ariaCurrent,
    ariaControls,
    ariaExpanded,
    videoId,
    videoTitle,
    className,
    children,
    isToggleDismiss = false,
    isDisclosureTrigger = false,
    variant = 'primary',
    type = 'button',
    isSmall = false,
  } = props

  const classNames = clsx(
    'button',
    `button--${variant}`,
    isSmall && 'button--small',
    className,
  )
  const toggleDismiss = isToggleDismiss || undefined
  const disclosureTrigger = isDisclosureTrigger || undefined
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
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      data-toggle-dismiss={toggleDismiss}
      data-disclosure-trigger={disclosureTrigger}
      data-video-id={videoId}
      data-video-title={videoTitle}
    >
      {content}
    </button>
  )
}
