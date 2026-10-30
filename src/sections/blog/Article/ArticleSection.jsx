import { Heading } from '@components'
import './ArticleSection.css'

export function ArticleSection({ id, title, paragraphs }) {
  return (
    <section className="article-section" aria-labelledby={id} data-reveal>
      <Heading level={2} size="h3" id={id}>
        {title}
      </Heading>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}
