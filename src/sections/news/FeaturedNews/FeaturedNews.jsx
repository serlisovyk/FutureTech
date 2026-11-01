import { Button, CounterPill, MetaGrid, Photo } from '@components'
import { formatCount, getPostMeta, getPostsByPlacement, getPostUrl } from '@utils'
import {
  featuredNewsPhotoBreakpoints,
  featuredNewsPhotoSizes,
  featuredNews,
  uiLabels,
} from '@data'
import './FeaturedNews.css'

export function FeaturedNews() {
  const { titleId, placement, labels } = featuredNews

  const { readMore, about } = uiLabels

  const [post] = getPostsByPlacement(placement)

  const {
    slug,
    title,
    excerpt,
    image,
    imageAlt,
    counters: { likes, comments },
  } = post

  const meta = getPostMeta(post, labels)

  const hiddenLabel = ` ${about} ${title}`

  return (
    <section className="featured-news" aria-labelledby={titleId}>
      <div className="featured-news__inner container">
        <Photo
          src={image}
          alt={imageAlt}
          sizes={featuredNewsPhotoSizes}
          breakpoints={featuredNewsPhotoBreakpoints}
          loading="eager"
          fetchPriority="high"
          className="featured-news__photo"
        />
        <div className="featured-news__body">
          <div className="featured-news__text">
            <h2 className="featured-news__title" id={titleId}>
              {title}
            </h2>
            <p className="featured-news__excerpt">{excerpt}</p>
          </div>

          <MetaGrid items={meta} className="featured-news__meta" />

          <div className="featured-news__footer">
            <div className="featured-news__counters">
              <CounterPill
                icon="ui/heart"
                label="likes"
                count={formatCount(likes)}
              />
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
            >
              {readMore}
              <span className="visually-hidden">{hiddenLabel}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
