import { NewsCard } from '@components'
import { trendingStories } from '@data'
import { getPostsByPlacement } from '@utils'
import './TrendingStories.css'

export function TrendingStories() {
  const { id, titleId, title, placement } = trendingStories

  const posts = getPostsByPlacement(placement)

  return (
    <section className="trending-stories" id={id} aria-labelledby={titleId}>
      <div className="trending-stories__inner container">
        <h2 className="visually-hidden" id={titleId}>
          {title}
        </h2>

        {posts.map((post) => {
          const {
            slug,
            title: postTitle,
            category,
            image,
            imageAlt,
            counters: { likes, comments },
          } = post

          return (
            <NewsCard
              key={slug}
              slug={slug}
              title={postTitle}
              category={category}
              image={image}
              imageAlt={imageAlt}
              likes={likes}
              comments={comments}
            />
          )
        })}
      </div>
    </section>
  )
}
