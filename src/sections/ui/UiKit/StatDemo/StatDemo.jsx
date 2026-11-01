import { Heading, Stat } from '@components'
import { statDemo } from '@data'

export function StatDemo() {
  const { title, caption, stats } = statDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{caption}</p>

        <div className="ui-kit__row ui-kit__row--wide">
          {stats.map(({ id, ...stat }) => (
            <Stat key={id} {...stat} />
          ))}
        </div>

        <div className="ui-kit__row ui-kit__row--wide">
          {stats.map(({ id, ...stat }) => (
            <Stat key={id} {...stat} isLarge />
          ))}
        </div>
      </div>
    </section>
  )
}
