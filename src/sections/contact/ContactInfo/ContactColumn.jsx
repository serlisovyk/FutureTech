import { Button, Icon } from '@components'
import './ContactColumn.css'

export function ContactColumn(props) {
  const { title, links, address, directions, socials } = props

  return (
    <div className="contact-column">
      <h2 className="contact-column__title">{title}</h2>

      <div className="contact-column__body">
        {links && (
          <ul className="contact-column__links">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Button
                  variant="ghost"
                  href={href}
                  icon="ui/arrow-up-right"
                  isCompact
                >
                  {label}
                </Button>
              </li>
            ))}
          </ul>
        )}

        {address && (
          <div className="contact-column__office">
            <p className="contact-column__address">{address}</p>
            <Button
              variant="ghost"
              href={directions.href}
              icon="ui/arrow-up-right"
              isCompact
            >
              {directions.label}
            </Button>
          </div>
        )}

        {socials && (
          <ul className="contact-column__socials">
            {socials.map(({ name, href, icon }) => (
              <li key={name}>
                <a
                  className="contact-column__social"
                  href={href}
                  rel="noopener"
                  aria-label={name}
                >
                  <Icon name={icon} className="contact-column__social-icon" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
