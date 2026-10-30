import { Heading, MetaGrid } from '@components'
import { article } from '@data/article.js'
import { getPostMeta } from '@utils'
import { ArticleSection } from './ArticleSection.jsx'
import './Article.css'

export function Article({ post }) {
  const { title: postTitle, body } = post

  const meta = getPostMeta(post, article.labels)

  return (
    <article className="article container" aria-labelledby={article.titleId}>
      <header className="article__header">
        <Heading level={1} id={article.titleId} className="article__title">
          {postTitle}
        </Heading>
        <MetaGrid items={meta} />
      </header>

      <div className="article__body">
        {body.map(({ id, title, paragraphs }) => (
          <ArticleSection key={id} id={id} title={title} paragraphs={paragraphs} />
        ))}
      </div>
    </article>
  )
}
