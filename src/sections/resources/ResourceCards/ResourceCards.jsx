import { resourceCardsSection, resourceCards } from '@data'
import { ResourceCard } from './ResourceCard'
import './ResourceCards.css'

export function ResourceCards() {
  const { id, titleId, title } = resourceCardsSection

  return (
    <section className="resource-cards" id={id} aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        {title}
      </h2>

      <ul className="resource-cards__list container">
        {resourceCards.map(({ id: cardId, ...resourceCard }) => (
          <li key={cardId} className="resource-cards__item">
            <ResourceCard {...resourceCard} />
          </li>
        ))}
      </ul>
    </section>
  )
}
