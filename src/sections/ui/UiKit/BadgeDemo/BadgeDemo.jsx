import { Badge, Heading } from '@components'
import { badgeDemo } from '@data'

export function BadgeDemo() {
  const { title, label } = badgeDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <div className="ui-kit__row">
          <Badge>{label}</Badge>
        </div>
      </div>
    </section>
  )
}
