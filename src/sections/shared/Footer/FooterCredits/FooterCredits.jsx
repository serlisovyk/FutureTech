import { Icon } from '@components'
import { footer } from '@data'

export function FooterCredits({ year }) {
  const {
    author,
    sourceCode: { href, label, icon },
  } = footer

  return (
    <div className="footer__credits">
      <p className="footer__author">
        {author}, {year}
      </p>

      <a
        className="footer__source"
        href={href}
        aria-label={label}
        title={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={icon} className="footer__source-icon" />
      </a>
    </div>
  )
}
