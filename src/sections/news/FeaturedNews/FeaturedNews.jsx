import { Button, CounterPill, MetaGrid, Photo } from '@components'
import {
  featuredNewsPhotoBreakpoints,
  featuredNewsPhotoSizes,
} from '@data/card-photos.js'
import { featuredNews } from '@data/news.js'
import { formatCount, getPostMeta, getPostsByPlacement, getPostUrl } from '@utils'
import './FeaturedNews.css'

export function FeaturedNews() {
  const [post] = getPostsByPlacement(featuredNews.placement)
  const { slug, title, excerpt, image, imageAlt, counters } = post

  const meta = getPostMeta(post, featuredNews.labels)

  return (
    <section className="featured-news" aria-labelledby={featuredNews.titleId}>
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
            <h2 className="featured-news__title" id={featuredNews.titleId}>
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
                count={formatCount(counters.likes)}
              />
              <CounterPill
                icon="ui/comment"
                label="comments"
                count={formatCount(counters.comments)}
              />
            </div>
            <Button
              variant="outline"
              icon="ui/arrow-up-right"
              href={getPostUrl(slug)}
            >
              Read More
              <span className="visually-hidden"> about {title}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
