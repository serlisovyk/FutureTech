import { Badge } from '@components'
import { footer } from '@data'

export function FooterTextLink({ label, href, isNew = false }) {
  const { newLabel } = footer

  return (
    <a className="footer__link" href={href}>
      {label} {isNew && <Badge>{newLabel}</Badge>}
    </a>
  )
}
