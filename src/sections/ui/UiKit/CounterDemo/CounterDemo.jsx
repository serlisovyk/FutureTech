import { Fragment } from 'react'
import { CounterPill, Heading } from '@components'
import { counterDemo } from '@data'

export function CounterDemo() {
  const { title, groups } = counterDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        {groups.map(({ id, caption, pills }) => (
          <Fragment key={id}>
            <p className="ui-kit__caption">{caption}</p>

            <div className="ui-kit__row">
              {pills.map(({ id: pillId, ...pill }) => (
                <CounterPill key={pillId} {...pill} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
