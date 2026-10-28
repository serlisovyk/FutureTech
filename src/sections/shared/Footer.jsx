import { clsx } from 'clsx'
import { Badge } from '@components/Badge.jsx'
import { Button } from '@components/Button.jsx'
import { Icon } from '@components/Icon.jsx'
import { footer } from '@data/footer.js'
import { socials } from '@data/socials.js'
import './Footer.css'

const buildYear = new Date().getFullYear()

function TextLink({ label, href, isNew = false }) {
  return (
    <a className="footer__link" href={href}>
      {label} {isNew && <Badge>New</Badge>}
    </a>
  )
}

function PillLink({ label, href }) {
  return (
    <Button variant="outline" href={href} icon="arrow-up-right" isSmall>
      {label}
    </Button>
  )
}

function FooterColumn({ title, links, isButtons = false }) {
  const LinkItem = isButtons ? PillLink : TextLink

  return (
    <div className={clsx('footer__column', isButtons && 'footer__column--buttons')}>
      <h2 className="footer__title">{title}</h2>
      <ul className={clsx('footer__list', isButtons && 'footer__list--buttons')}>
        {links.map((link) => (
          <li key={link.label}>
            <LinkItem {...link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav" aria-label="Footer">
          {footer.columns.map((column) => (
            <FooterColumn key={column.title} {...column} />
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
            © {buildYear} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
