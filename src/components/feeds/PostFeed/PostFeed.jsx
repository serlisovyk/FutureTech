import { PostRow } from '@components/cards/PostRow'
import {
  getPostFeedStatus,
  getPostFeedTabId,
  getPostsInCategory,
  getTabIndex,
} from '@utils'
import { allCategory, postFeed } from '@data'
import './PostFeed.css'

export function PostFeed({ id, categories, posts, limit = posts.length }) {
  const { slug: allSlug } = allCategory

  const { tabListLabel, emptyText } = postFeed

  const shownPosts = posts.slice(0, limit)

  const hasPosts = shownPosts.length > 0

  const panelId = `${id}-panel`

  const initialTabId = getPostFeedTabId(id, allSlug)

  return (
    <div className="post-feed" data-post-feed data-reveal>
      <div
        className="post-feed__tabs"
        role="tablist"
        aria-label={tabListLabel}
        data-tab-list
      >
        {categories.map(({ slug, name }) => {
          const isAll = slug === allSlug

          const tabIndex = getTabIndex(isAll)

          const postCount = getPostsInCategory(shownPosts, slug).length

          return (
            <button
              key={slug}
              className="post-feed__tab"
              type="button"
              role="tab"
              id={getPostFeedTabId(id, slug)}
              aria-selected={isAll}
              aria-controls={panelId}
              tabIndex={tabIndex}
              data-tab={slug}
              data-tab-all={isAll || undefined}
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
            const {
              slug,
              title,
              excerpt,
              date,
              category,
              author: { name: authorName, avatar: authorAvatar },
              counters: { likes, comments, shares },
            } = post

            return (
              <li key={slug} data-category={category}>
                <PostRow
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                  date={date}
                  category={category}
                  authorName={authorName}
                  authorAvatar={authorAvatar}
                  likes={likes}
                  comments={comments}
                  shares={shares}
                />
              </li>
            )
          })}
        </ul>

        <p className="post-feed__empty" data-post-feed-empty hidden={hasPosts}>
          {emptyText}
        </p>
      </div>
    </div>
  )
}
