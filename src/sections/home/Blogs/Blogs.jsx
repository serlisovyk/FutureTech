import { PostFeed, SectionHeading } from '@components'
import { blogs, blogCategories } from '@data'
import { getPostsByPlacement } from '@utils'

export function Blogs() {
  const { id, placement, titleId, feedId, limit, tag, title, link } = blogs

  const blogPosts = getPostsByPlacement(placement)

  return (
    <section className="blogs" id={id} aria-labelledby={titleId}>
      <SectionHeading tag={tag} title={title} titleId={titleId} link={link} />

      <PostFeed
        id={feedId}
        categories={blogCategories}
        posts={blogPosts}
        limit={limit}
      />
    </section>
  )
}
