import { Icon } from '@components'
import { footer } from '@data/footer.js'

export function FooterCredits({ year }) {
  const { author, sourceCode } = footer

  return (
    <div className="footer__credits">
      <p className="footer__author">
        {author}, {year}
      </p>
      <a
        className="footer__source"
        href={sourceCode.href}
        aria-label={sourceCode.label}
        title={sourceCode.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={sourceCode.icon} className="footer__source-icon" />
      </a>
    </div>
  )
}
