import { clsx } from 'clsx'
import { FooterPillLink } from './FooterPillLink.jsx'
import { FooterTextLink } from './FooterTextLink.jsx'

export function FooterColumn({ title, links, isButtons = false }) {
  const LinkItem = isButtons ? FooterPillLink : FooterTextLink

  return (
    <div className={clsx('footer__column', isButtons && 'footer__column--buttons')}>
      <h2 className="footer__title">{title}</h2>
      <ul className={clsx('footer__list', isButtons && 'footer__list--buttons')}>
        {links.map((link) => (
          <li key={link.label}>
            <LinkItem label={link.label} href={link.href} isNew={link.isNew} />
          </li>
        ))}
      </ul>
    </div>
  )
}
