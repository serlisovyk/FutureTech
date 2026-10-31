import { article } from '@data/article.js'
import { ArticleBody } from './ArticleBody.jsx'
import { ArticleHero } from './ArticleHero.jsx'
import { ArticleSidebar } from './ArticleSidebar.jsx'
import './Article.css'

export function Article({ post }) {
  const { title, image, imageAlt, body } = post

  return (
    <article className="article" aria-labelledby={article.titleId} data-article>
      <ArticleHero
        titleId={article.titleId}
        title={title}
        image={image}
        imageAlt={imageAlt}
      />

      <div className="article__layout">
        <ArticleSidebar post={post} />

        <ArticleBody sections={body} />
      </div>
    </article>
  )
}
