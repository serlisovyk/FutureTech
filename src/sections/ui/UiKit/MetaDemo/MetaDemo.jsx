import { Heading, MetaGrid } from '@components'
import { metaDemo } from '@data'

export function MetaDemo() {
  const { title, plainCaption, plainItems, cardCaption, cards } = metaDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{plainCaption}</p>

        <MetaGrid items={plainItems} />

        <p className="ui-kit__caption">{cardCaption}</p>

        {cards.map(({ id, items }) => (
          <MetaGrid key={id} items={items} isCard />
        ))}
      </div>
    </section>
  )
}
