import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './Button.css'

export function Button({
  variant = 'primary',
  icon,
  href,
  type = 'button',
  isSmall = false,
  className,
  children,
  ...props
}) {
  const isLink = Boolean(href)
  const Element = isLink ? 'a' : 'button'

  return (
    <Element
      className={clsx(
        'button',
        `button--${variant}`,
        isSmall && 'button--small',
        className,
      )}
      href={href}
      type={isLink ? undefined : type}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} className="button__icon" />}
    </Element>
  )
}
