import { Photo } from '@components/media/Photo'
import { Button } from '@components/ui/Button'
import { CounterPill } from '@components/ui/CounterPill'
import { cardPhotoBreakpoints, newsCardPhotoSizes } from '@data/card-photos.js'
import { formatCount, getCategoryName, getPostUrl } from '@utils'
import './NewsCard.css'

export function NewsCard(props) {
  const { slug, title, category, image, imageAlt, likes, comments } = props

  return (
    <article className="news-card">
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
            <CounterPill icon="ui/heart" label="likes" count={formatCount(likes)} />
            <CounterPill
              icon="ui/comment"
              label="comments"
              count={formatCount(comments)}
            />
          </div>
          <Button
            variant="outline"
            icon="ui/arrow-up-right"
            href={getPostUrl(slug)}
            className="news-card__button"
          >
            Read More
            <span className="visually-hidden"> about {title}</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
