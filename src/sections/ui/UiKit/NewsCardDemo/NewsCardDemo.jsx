import { Heading, NewsCard } from '@components'
import { getPostsByPlacement } from '@utils'
import { newsCardDemo } from '@data'

export function NewsCardDemo() {
  const { title, caption, placement } = newsCardDemo

  const posts = getPostsByPlacement(placement)

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{caption}</p>

        <div className="ui-kit__grid ui-kit__grid--news">
          {posts.map((post) => {
            const {
              slug,
              title,
              category,
              image,
              imageAlt,
              counters: { likes, comments },
            } = post

            return (
              <NewsCard
                key={slug}
                slug={slug}
                title={title}
                category={category}
                image={image}
                imageAlt={imageAlt}
                likes={likes}
                comments={comments}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
