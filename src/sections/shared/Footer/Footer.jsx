import { Icon } from '@components'
import { footer } from '@data/footer.js'
import { socials } from '@data/socials.js'
import { getCurrentYear } from '@utils'
import { FooterColumn } from './FooterColumn.jsx'
import './Footer.css'

export function Footer() {
  const currentYear = getCurrentYear()

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav" aria-label="Footer">
          {footer.columns.map(({ title, links, isButtons }) => (
            <FooterColumn
              key={title}
              title={title}
              links={links}
              isButtons={isButtons}
            />
          ))}
        </nav>
        <div className="footer__bar">
          <ul className="footer__legal">
            {footer.legal.map(({ label }) => (
              <li key={label} className="footer__legal-item">
                {label}
              </li>
            ))}
          </ul>
          <ul className="footer__socials">
            {socials.map(({ name, href, icon }) => (
              <li key={name}>
                <a className="footer__social" href={href} aria-label={name}>
                  <Icon name={icon} className="footer__social-icon" />
                </a>
              </li>
            ))}
          </ul>
          <p className="footer__copyright">
            © {currentYear} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
