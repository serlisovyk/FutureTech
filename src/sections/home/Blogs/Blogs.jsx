import { PostFeed, SectionHeading } from '@components'
import { blogs } from '@data/blogs.js'
import { blogCategories } from '@data/categories.js'
import { getPostsByPlacement } from '@utils'

export function Blogs() {
  const blogPosts = getPostsByPlacement(blogs.placement)

  return (
    <section className="blogs" id={blogs.id}>
      <SectionHeading tag={blogs.tag} title={blogs.title} link={blogs.link} />
      <PostFeed
        id={blogs.feedId}
        categories={blogCategories}
        posts={blogPosts}
        limit={blogs.limit}
      />
    </section>
  )
}
