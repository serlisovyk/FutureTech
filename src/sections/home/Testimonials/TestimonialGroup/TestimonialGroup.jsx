import { TestimonialCard } from '@sections/home/Testimonials/TestimonialCard'
import './TestimonialGroup.css'

export function TestimonialGroup({ items, id, isRegion = false }) {
  const region = isRegion || undefined

  return (
    <ul className="testimonial-group" id={id} data-disclosure-region={region}>
      {items.map(({ id: itemId, ...testimonial }) => (
        <li key={itemId} className="testimonial-group__item">
          <TestimonialCard {...testimonial} />
        </li>
      ))}
    </ul>
  )
}
