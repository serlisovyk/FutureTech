import { Photo } from '@components/media/Photo'
import { Button } from '@components/ui/Button'
import { CounterPill } from '@components/ui/CounterPill'
import { formatCount, getCategoryName, getPostUrl } from '@utils'
import {
  cardPhotoBreakpoints,
  counterLabels,
  newsCardPhotoSizes,
  uiLabels,
} from '@data'
import './NewsCard.css'

export function NewsCard(props) {
  const { slug, title, category, image, imageAlt, likes, comments } = props

  const { readMore, about } = uiLabels

  const { likes: likesLabel, comments: commentsLabel } = counterLabels

  const hiddenLabel = ` ${about} ${title}`

  return (
    <article className="news-card" data-reveal>
      <Photo
        src={image}
        alt={imageAlt}
        sizes={newsCardPhotoSizes}
        breakpoints={cardPhotoBreakpoints}
        className="news-card__photo"
      />

      <div className="news-card__body">
        <div className="news-card__text">
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__category">{getCategoryName(category)}</p>
        </div>

        <div className="news-card__footer">
          <div className="news-card__counters">
            <CounterPill
              icon="ui/heart"
              label={likesLabel}
              count={formatCount(likes)}
            />

            <CounterPill
              icon="ui/comment"
              label={commentsLabel}
              count={formatCount(comments)}
            />
          </div>

          <Button
            variant="outline"
            icon="ui/arrow-up-right"
            href={getPostUrl(slug)}
            className="news-card__button"
          >
            {readMore}
            <span className="visually-hidden">{hiddenLabel}</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
