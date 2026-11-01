import { clsx } from 'clsx'
import { Children } from 'react'
import { CardGroup } from '@components/cards/CardGroup'
import { Button } from '@components/ui/Button'
import { SectionHeading } from '@components/ui/SectionHeading'
import './DisclosureSection.css'

export function DisclosureSection(props) {
  const {
    id,
    titleId,
    moreId,
    tag,
    title,
    moreLabel,
    initialCount,
    className,
    children,
  } = props

  const cards = Children.toArray(children)

  const firstCards = cards.slice(0, initialCount)

  const moreCards = cards.slice(initialCount)

  return (
    <section
      className={clsx('disclosure-section', className)}
      id={id}
      aria-labelledby={titleId}
      data-disclosure
    >
      <SectionHeading tag={tag} title={title} titleId={titleId}>
        <Button
          variant="outline"
          icon="ui/arrow-up-right"
          ariaControls={moreId}
          ariaExpanded={false}
          className="disclosure-section__more"
          isDisclosureTrigger
        >
          {moreLabel}
        </Button>
      </SectionHeading>

      <div className="disclosure-section__grid container">
        <CardGroup>{firstCards}</CardGroup>

        <CardGroup id={moreId} isRegion>
          {moreCards}
        </CardGroup>
      </div>
    </section>
  )
}
