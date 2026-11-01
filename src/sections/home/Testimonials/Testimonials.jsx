import { DisclosureSection } from '@components'
import { testimonials, testimonialsSection } from '@data'
import { TestimonialCard } from './TestimonialCard'
import './Testimonials.css'

export function Testimonials() {
  return (
    <DisclosureSection {...testimonialsSection} className="testimonials">
      {testimonials.map(({ id, ...testimonial }) => (
        <TestimonialCard key={id} {...testimonial} />
      ))}
    </DisclosureSection>
  )
}
