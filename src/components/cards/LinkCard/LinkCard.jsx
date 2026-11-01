import { clsx } from 'clsx'
import './LinkCard.css'

export function LinkCard({ href, className, children }) {
  return (
    <a className={clsx('link-card', className)} href={href}>
      {children}
    </a>
  )
}
