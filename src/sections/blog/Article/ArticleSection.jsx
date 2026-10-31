import { clsx } from 'clsx'
import './ArticleSection.css'

export function ArticleSection({ id, title, paragraphs, isLead = false }) {
  const headingId = `${id}-title`

  return (
    <section
      className={clsx('article-section', isLead && 'article-section--lead')}
      id={id}
      aria-labelledby={headingId}
      tabIndex={-1}
      data-article-section
      data-reveal
    >
      <h2 className="article-section__title" id={headingId}>
        {title}
      </h2>
      <div className="article-section__text">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
