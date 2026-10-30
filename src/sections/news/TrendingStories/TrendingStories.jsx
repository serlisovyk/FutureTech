import { NewsCard } from '@components'
import { trendingStories } from '@data/news.js'
import { getPostsByPlacement } from '@utils'
import './TrendingStories.css'

export function TrendingStories() {
  const posts = getPostsByPlacement(trendingStories.placement)

  return (
    <section
      className="trending-stories"
      id={trendingStories.id}
      aria-labelledby={trendingStories.titleId}
    >
      <div className="trending-stories__inner container">
        <h2 className="visually-hidden" id={trendingStories.titleId}>
          {trendingStories.title}
        </h2>

        {posts.map((post) => {
          const { slug, title, category, image, imageAlt, counters } = post

          return (
            <NewsCard
              key={slug}
              slug={slug}
              title={title}
              category={category}
              image={image}
              imageAlt={imageAlt}
              likes={counters.likes}
              comments={counters.comments}
            />
          )
        })}
      </div>
    </section>
  )
}
