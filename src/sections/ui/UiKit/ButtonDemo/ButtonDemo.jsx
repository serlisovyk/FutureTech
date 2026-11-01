import { Fragment } from 'react'
import { Button, Heading } from '@components'
import { buttonDemo } from '@data'

export function ButtonDemo() {
  const { title, groups } = buttonDemo

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        {groups.map(({ id, caption, buttons }) => (
          <Fragment key={id}>
            <p className="ui-kit__caption">{caption}</p>

            <div className="ui-kit__row">
              {buttons.map(({ id: buttonId, label, ...button }) => (
                <Button key={buttonId} {...button}>
                  {label}
                </Button>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
