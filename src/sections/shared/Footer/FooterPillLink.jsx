import { Button } from '@components'

export function FooterPillLink({ label, href }) {
  return (
    <Button variant="outline" href={href} icon="arrow-up-right" isSmall>
      {label}
    </Button>
  )
}
