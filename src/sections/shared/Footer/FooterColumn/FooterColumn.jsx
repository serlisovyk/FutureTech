import { clsx } from 'clsx'
import { getLinkHref } from '@utils'
import { FooterPillLink } from '../FooterPillLink'
import { FooterTextLink } from '../FooterTextLink'

export function FooterColumn({ title, links, isButtons = false }) {
  const LinkItem = isButtons ? FooterPillLink : FooterTextLink

  return (
    <div
      className={clsx('footer__column', isButtons && 'footer__column--buttons')}
      data-reveal
    >
      <p className="footer__title">{title}</p>

      <ul className={clsx('footer__list', isButtons && 'footer__list--buttons')}>
        {links.map((link) => {
          const { label, isNew } = link

          const href = getLinkHref(link)

          return (
            <li key={label}>
              <LinkItem label={label} href={href} isNew={isNew} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
