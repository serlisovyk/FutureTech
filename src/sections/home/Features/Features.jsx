import { SectionHeading } from '@components'
import { featureGroups, featuresSection } from '@data/features.js'
import { FeatureGroup } from './FeatureGroup.jsx'

export function Features() {
  return (
    <section className="features" id={featuresSection.id}>
      <SectionHeading tag={featuresSection.tag} title={featuresSection.title} />
      {featureGroups.map(({ id, icon, title, text, cards, hasWideIcon }) => (
        <FeatureGroup
          key={id}
          icon={icon}
          title={title}
          text={text}
          cards={cards}
          hasWideIcon={hasWideIcon}
        />
      ))}
    </section>
  )
}
