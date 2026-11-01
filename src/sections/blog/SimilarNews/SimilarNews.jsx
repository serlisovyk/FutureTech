import { Button, Heading, NewsCard } from '@components'
import { similarNews } from '@data'
import { getSimilarPosts } from '@utils'
import './SimilarNews.css'

export function SimilarNews({ post }) {
  const {
    count,
    titleId,
    title,
    link: { href, label },
  } = similarNews

  const posts = getSimilarPosts(post, count)

  return (
    <section className="similar-news" aria-labelledby={titleId}>
      <div className="similar-news__inner container">
        <div className="similar-news__header" data-reveal>
          <Heading level={2} size="minor" id={titleId}>
            {title}
          </Heading>

          <Button variant="outline" icon="ui/arrow-up-right" href={href}>
            {label}
          </Button>
        </div>

        <div className="similar-news__list">
          {posts.map((similarPost) => {
            const {
              slug,
              title: postTitle,
              category,
              image,
              imageAlt,
              counters: { likes, comments },
            } = similarPost

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
      </div>
    </section>
  )
}
