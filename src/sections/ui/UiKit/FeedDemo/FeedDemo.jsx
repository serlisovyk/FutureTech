import { Heading, PostFeed } from '@components'
import { getPostsByPlacement } from '@utils'
import { feedDemo } from '@data'

export function FeedDemo() {
  const { title, blogCaption, blog, newsCaption, news } = feedDemo

  const { id: blogId, categories: blogCategories, placement: blogPlacement } = blog

  const {
    id: newsId,
    categories: newsCategories,
    placement: newsPlacement,
    limit: newsLimit,
  } = news

  const blogPosts = getPostsByPlacement(blogPlacement)

  const newsPosts = getPostsByPlacement(newsPlacement)

  return (
    <section className="ui-kit__group">
      <div className="container ui-kit__body">
        <Heading level={2} size="h3">
          {title}
        </Heading>

        <p className="ui-kit__caption">{blogCaption}</p>
      </div>

      <PostFeed id={blogId} categories={blogCategories} posts={blogPosts} />

      <div className="container ui-kit__body">
        <p className="ui-kit__caption">{newsCaption}</p>
      </div>

      <PostFeed
        id={newsId}
        categories={newsCategories}
        posts={newsPosts}
        limit={newsLimit}
      />
    </section>
  )
}
