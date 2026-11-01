import { CounterPill, MetaGrid } from '@components'
import { formatCount, getArticleMeta } from '@utils'
import { article } from '@data'
import './ArticleSidebar.css'

export function ArticleSidebar({ post }) {
  const { slug, counters } = post

  const { likes, views, shares } = counters

  const { labels, sidebarLabel } = article

  const meta = getArticleMeta(post, labels)

  const likedCount = formatCount(likes + 1)

  return (
    <aside className="article-sidebar" aria-label={sidebarLabel}>
      <div className="article-sidebar__counters">
        <CounterPill
          icon="ui/heart"
          label="likes"
          count={formatCount(likes)}
          likedCount={likedCount}
          likeKey={slug}
          isLarge
        />
        <CounterPill
          icon="ui/eye"
          label="views"
          count={formatCount(views)}
          isLarge
        />
        <CounterPill
          icon="ui/send"
          label="shares"
          count={formatCount(shares)}
          isLarge
        />
      </div>

      <div className="article-sidebar__details">
        <MetaGrid items={meta} className="article-sidebar__meta" />
      </div>
    </aside>
  )
}
