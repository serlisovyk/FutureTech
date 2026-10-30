import { PostFeed, SectionHeading } from '@components'
import { newsCategories } from '@data/categories.js'
import { newsHub } from '@data/news.js'
import { getPostsByPlacement } from '@utils'

export function NewsHub() {
  const posts = getPostsByPlacement(newsHub.placement)

  return (
    <section className="news-hub" id={newsHub.id} aria-labelledby={newsHub.titleId}>
      <SectionHeading
        tag={newsHub.tag}
        title={newsHub.title}
        titleId={newsHub.titleId}
        link={newsHub.link}
      />

      <PostFeed id={newsHub.feedId} categories={newsCategories} posts={posts} />
    </section>
  )
}
