import { TestimonialCard } from './TestimonialCard.jsx'
import './TestimonialGroup.css'

export function TestimonialGroup({ items, id, isRegion = false }) {
  const region = isRegion || undefined

  return (
    <ul className="testimonial-group" id={id} data-disclosure-region={region}>
      {items.map((item) => {
        const { id: itemId, name, place, avatar, rating, ratingLabel, text } = item

        return (
          <li key={itemId} className="testimonial-group__item">
            <TestimonialCard
              name={name}
              place={place}
              avatar={avatar}
              rating={rating}
              ratingLabel={ratingLabel}
              text={text}
            />
          </li>
        )
      })}
    </ul>
  )
}
