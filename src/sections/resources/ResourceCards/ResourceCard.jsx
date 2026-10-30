import { Button, Photo } from '@components'
import { cardPhotoBreakpoints, resourceCardPhotoSizes } from '@data/card-photos.js'
import { resourceCardsSection, resourceLibrary } from '@data/resources.js'
import './ResourceCard.css'

export function ResourceCard({ titleId, title, text, image, detailsHref }) {
  const { detailsLabel } = resourceCardsSection

  const { downloadLabel, downloadHref } = resourceLibrary

  return (
    <article className="resource-card" aria-labelledby={titleId}>
      <Photo
        src={image}
        alt=""
        ariaHidden="true"
        sizes={resourceCardPhotoSizes}
        breakpoints={cardPhotoBreakpoints}
        className="resource-card__photo"
      />

      <div className="resource-card__text">
        <h3 className="resource-card__title" id={titleId}>
          {title}
        </h3>
        <p>{text}</p>
      </div>

      <div className="resource-card__buttons">
        <Button
          variant="outline"
          href={detailsHref}
          className="resource-card__button"
        >
          {detailsLabel}
          <span className="visually-hidden">: {title}</span>
        </Button>
        <Button
          variant="ghost"
          href={downloadHref}
          className="resource-card__button"
        >
          {downloadLabel}
          <span className="visually-hidden">: {title}</span>
        </Button>
      </div>
    </article>
  )
}
