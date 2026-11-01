import { article } from '@data'
import { ArticleBody } from './ArticleBody'
import { ArticleHero } from './ArticleHero'
import { ArticleSidebar } from './ArticleSidebar'
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
