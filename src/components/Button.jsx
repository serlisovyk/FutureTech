import { clsx } from 'clsx'
import { Icon } from './Icon.jsx'
import './Button.css'

export function Button({
  variant = 'primary',
  icon,
  isSmall = false,
  href,
  type = 'button',
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
