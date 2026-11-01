import { Icon } from '@components'

export function ContactSocials({ socials }) {
  return (
    <ul className="contact-column__socials">
      {socials.map(({ name, href, icon }) => (
        <li key={name}>
          <a className="contact-column__social" href={href} aria-label={name}>
            <Icon name={icon} className="contact-column__social-icon" />
          </a>
        </li>
      ))}
    </ul>
  )
}
