import { resourceCardsSection, resourceCards } from '@data'
import { ResourceCard } from './ResourceCard'
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
        {resourceCards.map(({ id, ...resourceCard }) => (
          <li key={id} className="resource-cards__item">
            <ResourceCard {...resourceCard} />
          </li>
        ))}
      </ul>
    </section>
  )
}
