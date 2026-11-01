import { clsx } from 'clsx'
import { Heading, Icon } from '@components'
import { FeatureCard } from '../FeatureCard'
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
        {cards.map((card) => {
          const { title: cardTitle } = card

          return <FeatureCard key={cardTitle} {...card} />
        })}
      </ul>
    </div>
  )
}
