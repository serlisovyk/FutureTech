import { Icon } from '@components/media/Icon'
import './SocialLinks.css'

export function SocialLinks({ socials }) {
  return (
    <ul className="social-links">
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
