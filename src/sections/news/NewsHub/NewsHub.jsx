import { PostFeed, SectionHeading } from '@components'
import { newsCategories, newsHub } from '@data'
import { getPostsByPlacement } from '@utils'

export function NewsHub() {
  const { id, titleId, feedId, tag, title, link, placements } = newsHub

  const posts = getPostsByPlacement(...placements)

  return (
    <section className="news-hub" id={id} aria-labelledby={titleId}>
      <SectionHeading tag={tag} title={title} titleId={titleId} link={link} />

      <PostFeed id={feedId} categories={newsCategories} posts={posts} />
    </section>
  )
}
