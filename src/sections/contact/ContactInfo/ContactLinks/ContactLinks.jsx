import { Button } from '@components'

export function ContactLinks({ links }) {
  return (
    <ul className="contact-column__links">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Button variant="ghost" href={href} icon="ui/arrow-up-right" isCompact>
            {label}
          </Button>
        </li>
      ))}
    </ul>
  )
}
