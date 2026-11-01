import { clsx } from 'clsx'
import { Icon } from '@components/media/Icon'
import './SocialLinks.css'

export function SocialLinks({ socials, className, variant = 'plain' }) {
  return (
    <ul className={clsx('social-links', `social-links--${variant}`, className)}>
      {socials.map(({ name, href, icon }) => (
        <li key={name}>
          <a className="social-links__link" href={href} aria-label={name}>
            <Icon name={icon} className="social-links__icon" />
          </a>
        </li>
      ))}
    </ul>
  )
}
