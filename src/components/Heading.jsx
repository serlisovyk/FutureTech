import { clsx } from 'clsx'
import './Heading.css'

export function Heading({ level = 2, size = 'h2', className, children, ...props }) {
  const Tag = `h${level}`

  return (
    <Tag className={clsx('heading', `heading--${size}`, className)} {...props}>
      {children}
    </Tag>
  )
}
