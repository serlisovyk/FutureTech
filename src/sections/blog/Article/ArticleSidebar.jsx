import { CounterPill, MetaGrid } from '@components'
import { article } from '@data/article.js'
import { formatCount, getArticleMeta } from '@utils'
import { TableOfContents } from './TableOfContents.jsx'
import './ArticleSidebar.css'

export function ArticleSidebar({ post }) {
  const { slug, counters, body } = post
  const { likes, views, shares } = counters

  const meta = getArticleMeta(post, article.labels)

  return (
    <aside className="article-sidebar" aria-label={article.sidebarLabel}>
      <div className="article-sidebar__counters">
        <CounterPill
          icon="ui/heart"
          label="likes"
          count={formatCount(likes)}
          likedCount={formatCount(likes + 1)}
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

        <TableOfContents sections={body} />
      </div>
    </aside>
  )
}
