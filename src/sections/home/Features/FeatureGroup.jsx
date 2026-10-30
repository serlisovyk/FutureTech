import { clsx } from 'clsx'
import { Heading, Icon } from '@components'
import { FeatureCard } from './FeatureCard.jsx'
import './FeatureGroup.css'

export function FeatureGroup({ icon, title, text, cards, hasWideIcon = false }) {
  return (
    <div className="feature-group container">
      <div className="feature-group__intro" data-reveal>
        <Icon
          name={icon}
          className={clsx(
            'feature-group__icon',
            hasWideIcon && 'feature-group__icon--wide',
          )}
        />
        <div className="feature-group__text">
          <Heading level={3} size="h3">
            {title}
          </Heading>
          <p>{text}</p>
        </div>
      </div>
      <ul className="feature-group__cards">
        {cards.map(({ title: cardTitle, text: cardText }) => (
          <FeatureCard key={cardTitle} title={cardTitle} text={cardText} />
        ))}
      </ul>
    </div>
  )
}
