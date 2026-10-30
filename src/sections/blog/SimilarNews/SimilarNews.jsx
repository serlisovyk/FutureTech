import { Button, Heading, NewsCard } from '@components'
import { similarNews } from '@data/article.js'
import { getSimilarPosts } from '@utils'
import './SimilarNews.css'

export function SimilarNews({ post }) {
  const posts = getSimilarPosts(post, similarNews.count)

  return (
    <section className="similar-news" aria-labelledby={similarNews.titleId}>
      <div className="similar-news__inner container">
        <div className="similar-news__header" data-reveal>
          <Heading level={2} size="minor" id={similarNews.titleId}>
            {similarNews.title}
          </Heading>
          <Button
            variant="outline"
            icon="ui/arrow-up-right"
            href={similarNews.link.href}
          >
            {similarNews.link.label}
          </Button>
        </div>

        <div className="similar-news__list">
          {posts.map((similarPost) => {
            const { slug, title, category, image, imageAlt, counters } = similarPost

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
      </div>
    </section>
  )
}
