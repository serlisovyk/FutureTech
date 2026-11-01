import { Heading, Tag } from '@components'
import { tagDemo } from '@data'

export function TagDemo() {
  const { title, label } = tagDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <div className="ui-kit__row">
          <Tag>{label}</Tag>
        </div>
      </div>
    </section>
  )
}
