import { clsx } from 'clsx'
import { Icon } from './Icon.jsx'
import './Button.css'

export function Button({
  variant = 'primary',
  icon,
  href,
  type = 'button',
  className,
  children,
  ...props
}) {
  const isLink = Boolean(href)
  const Tag = isLink ? 'a' : 'button'

  return (
    <Tag
      className={clsx('button', `button--${variant}`, className)}
      href={href}
      type={isLink ? undefined : type}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} className="button__icon" />}
    </Tag>
  )
}
