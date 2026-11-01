import { Button } from '@components'

export function FooterPillLink({ label, href }) {
  return (
    <Button variant="outline" href={href} icon="ui/arrow-up-right" isSmall>
      {label}
    </Button>
  )
}
