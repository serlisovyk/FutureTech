import { Badge } from '@components'
import { footer } from '@data/footer.js'

export function FooterTextLink({ label, href, isNew = false }) {
  return (
    <a className="footer__link" href={href}>
      {label} {isNew && <Badge>{footer.newLabel}</Badge>}
    </a>
  )
}
