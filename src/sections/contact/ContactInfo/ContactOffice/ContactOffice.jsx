import { Button } from '@components'

export function ContactOffice({ address, directions }) {
  const { href, label } = directions

  return (
    <div className="contact-column__office">
      <p className="contact-column__address">{address}</p>

      <Button variant="ghost" href={href} icon="ui/arrow-up-right" isCompact>
        {label}
      </Button>
    </div>
  )
}
