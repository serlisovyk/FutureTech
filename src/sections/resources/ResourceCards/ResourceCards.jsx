import { resourceCardsSection, resourceCards } from '@data/resources.js'
import { ResourceCard } from './ResourceCard.jsx'
import './ResourceCards.css'

export function ResourceCards() {
  return (
    <section
      className="resource-cards"
      id={resourceCardsSection.id}
      aria-labelledby={resourceCardsSection.titleId}
    >
      <h2 className="visually-hidden" id={resourceCardsSection.titleId}>
        {resourceCardsSection.title}
      </h2>

      <ul className="resource-cards__list container">
        {resourceCards.map((resourceCard) => {
          const { id, titleId, title, text, image, detailsHref } = resourceCard

          return (
            <li key={id} className="resource-cards__item">
              <ResourceCard
                titleId={titleId}
                title={title}
                text={text}
                image={image}
                detailsHref={detailsHref}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
