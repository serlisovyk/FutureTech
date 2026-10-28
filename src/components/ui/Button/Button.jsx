import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './Button.css'

export function Button({
  icon,
  href,
  ariaCurrent,
  className,
  children,
  isToggleDismiss = false,
  variant = 'primary',
  type = 'button',
  isSmall = false,
}) {
  const isLink = Boolean(href)
  const Element = isLink ? 'a' : 'button'
  const buttonType = isLink ? undefined : type
  const toggleDismiss = isToggleDismiss || undefined

  return (
    <Element
      className={clsx(
        'button',
        `button--${variant}`,
        isSmall && 'button--small',
        className,
      )}
      href={href}
      type={buttonType}
      aria-current={ariaCurrent}
      data-toggle-dismiss={toggleDismiss}
    >
      {children}
      {icon && <Icon name={icon} className="button__icon" />}
    </Element>
  )
}
