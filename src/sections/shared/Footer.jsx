import { Icon } from '@components/Icon.jsx'
import { footer } from '@data/footer.js'
import { socials } from '@data/socials.js'
import { getCurrentYear } from '@utils/get-current-year.js'
import { FooterColumn } from './FooterColumn.jsx'
import './Footer.css'

export function Footer() {
  const currentYear = getCurrentYear()

  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav" aria-label="Footer">
          {footer.columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
              isButtons={column.isButtons}
            />
          ))}
        </nav>
        <div className="footer__bar">
          <ul className="footer__legal">
            {footer.legal.map((item) => (
              <li key={item.label} className="footer__legal-item">
                {item.label}
              </li>
            ))}
          </ul>
          <ul className="footer__socials">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  className="footer__social"
                  href={social.href}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="footer__social-icon" />
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
