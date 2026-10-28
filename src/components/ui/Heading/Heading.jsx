import { clsx } from 'clsx'
import './Heading.css'

export function Heading({ id, className, children, level = 2, size = 'h2' }) {
  const Tag = `h${level}`

  return (
    <Tag className={clsx('heading', `heading--${size}`, className)} id={id}>
      {children}
    </Tag>
  )
}
