import { Photo, Rating } from '@components'
import { testimonialAvatarBreakpoints, testimonialAvatarSizes } from '@data'
import './TestimonialCard.css'

export function TestimonialCard(props) {
  const { name, place, avatar, rating, text } = props

  return (
    <figure className="testimonial-card" data-reveal>
      <figcaption className="testimonial-card__author">
        <Photo
          src={avatar}
          alt=""
          ariaHidden="true"
          sizes={testimonialAvatarSizes}
          breakpoints={testimonialAvatarBreakpoints}
          className="testimonial-card__avatar"
        />

        <div className="testimonial-card__person">
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__place">{place}</p>
        </div>
      </figcaption>

      <div className="testimonial-card__body">
        <Rating value={rating} className="testimonial-card__rating" />

        <blockquote className="testimonial-card__quote">
          <p className="testimonial-card__text">{text}</p>
        </blockquote>
      </div>
    </figure>
  )
}
