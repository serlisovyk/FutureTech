import { article } from '@data/article.js'
import './TableOfContents.css'

export function TableOfContents({ sections }) {
  const { contentsId, contentsTitle } = article

  return (
    <nav
      className="table-of-contents"
      aria-labelledby={contentsId}
      data-table-of-contents
    >
      <h2 className="table-of-contents__title" id={contentsId}>
        {contentsTitle}
      </h2>
      <ul className="table-of-contents__list">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              className="table-of-contents__link"
              href={`#${id}`}
              data-table-of-contents-link
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
