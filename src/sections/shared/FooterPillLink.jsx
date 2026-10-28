import { Button } from '@components/Button.jsx'

export function FooterPillLink({ label, href }) {
  return (
    <Button variant="outline" href={href} icon="arrow-up-right" isSmall>
      {label}
    </Button>
  )
}
