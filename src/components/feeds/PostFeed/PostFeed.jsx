import { PostRow } from '@components/cards/PostRow'
import { allCategory } from '@data/categories.js'
import { postFeed } from '@data/post-feed.js'
import { getPostFeedStatus, getPostFeedTabId, getPostsInCategory } from '@utils'
import './PostFeed.css'

export function PostFeed({ id, categories, posts, limit = posts.length }) {
  const shownPosts = posts.slice(0, limit)
  const hasPosts = shownPosts.length > 0
  const panelId = `${id}-panel`
  const initialTabId = getPostFeedTabId(id, allCategory.slug)

  return (
    <div className="post-feed" data-post-feed>
      <div
        className="post-feed__tabs"
        role="tablist"
        aria-label={postFeed.tabListLabel}
        data-tab-list
      >
        {categories.map(({ slug, name }) => {
          const isSelected = slug === allCategory.slug
          const tabIndex = isSelected ? 0 : -1
          const postCount = getPostsInCategory(shownPosts, slug).length

          return (
            <button
              key={slug}
              className="post-feed__tab"
              type="button"
              role="tab"
              id={getPostFeedTabId(id, slug)}
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={tabIndex}
              data-tab={slug}
              data-status={getPostFeedStatus(postCount, name)}
            >
              {name}
            </button>
          )
        })}
      </div>
      <p className="visually-hidden" role="status" data-post-feed-status />
      <div
        className="post-feed__panel"
        role="tabpanel"
        id={panelId}
        aria-labelledby={initialTabId}
        data-post-feed-panel
      >
        <ul className="post-feed__list">
          {shownPosts.map((post) => {
            const { slug, title, excerpt, date, category, author, counters } = post

            return (
              <li key={slug} data-category={category}>
                <PostRow
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                  date={date}
                  category={category}
                  authorName={author.name}
                  authorAvatar={author.avatar}
                  likes={counters.likes}
                  comments={counters.comments}
                  shares={counters.shares}
                />
              </li>
            )
          })}
        </ul>
        <p className="post-feed__empty" data-post-feed-empty hidden={hasPosts}>
          {postFeed.emptyText}
        </p>
      </div>
    </div>
  )
}
