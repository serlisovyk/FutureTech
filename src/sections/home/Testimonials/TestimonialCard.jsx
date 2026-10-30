import { Icon, Photo } from '@components'
import {
  testimonialAvatarBreakpoints,
  testimonialAvatarSizes,
} from '@data/card-photos.js'
import './TestimonialCard.css'

export function TestimonialCard(props) {
  const { name, place, avatar, rating, ratingLabel, text } = props

  return (
    <figure className="testimonial-card">
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
        <p className="testimonial-card__rating">
          {Array.from({ length: rating }, (_, index) => (
            <Icon key={index} name="ui/star" className="testimonial-card__star" />
          ))}
          <span className="visually-hidden">{ratingLabel}</span>
        </p>
        <blockquote className="testimonial-card__quote">
          <p className="testimonial-card__text">{text}</p>
        </blockquote>
      </div>
    </figure>
  )
}
