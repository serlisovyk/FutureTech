import { Button, SectionHeading } from '@components'
import { testimonials, testimonialsSection } from '@data/testimonials.js'
import { TestimonialGroup } from './TestimonialGroup.jsx'
import './Testimonials.css'

export function Testimonials() {
  const { id, titleId, moreId, tag, title, moreLabel, initialCount } =
    testimonialsSection

  const firstItems = testimonials.slice(0, initialCount)
  const moreItems = testimonials.slice(initialCount)

  return (
    <section
      className="testimonials"
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
          className="testimonials__more"
          isDisclosureTrigger
        >
          {moreLabel}
        </Button>
      </SectionHeading>

      <div className="testimonials__grid container">
        <TestimonialGroup items={firstItems} />

        <TestimonialGroup items={moreItems} id={moreId} isRegion />
      </div>
    </section>
  )
}
