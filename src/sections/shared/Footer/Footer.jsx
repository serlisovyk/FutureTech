import { SocialLinks } from '@components'
import { getCurrentYear } from '@utils'
import { footer, socials } from '@data'
import { FooterColumn } from './FooterColumn'
import { FooterCredits } from './FooterCredits'
import './Footer.css'

export function Footer() {
  const { navLabel, columns, legal, copyright } = footer

  const currentYear = getCurrentYear()

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav" aria-label={navLabel}>
          {columns.map((column) => {
            const { title } = column

            return <FooterColumn key={title} {...column} />
          })}
        </nav>
        <div className="footer__bar">
          <ul className="footer__legal">
            {legal.map(({ label }) => (
              <li key={label} className="footer__legal-item">
                {label}
              </li>
            ))}
          </ul>
          <SocialLinks socials={socials} className="footer__socials" />
          <p className="footer__copyright">
            © {currentYear} {copyright}
          </p>
        </div>

        <FooterCredits year={currentYear} />
      </div>
    </footer>
  )
}
