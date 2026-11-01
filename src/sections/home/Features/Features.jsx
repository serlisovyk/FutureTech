import { SectionHeading } from '@components'
import { featureGroups, featuresSection } from '@data'
import { FeatureGroup } from './FeatureGroup'

export function Features() {
  return (
    <section
      className="features"
      id={featuresSection.id}
      aria-labelledby={featuresSection.titleId}
    >
      <SectionHeading
        tag={featuresSection.tag}
        title={featuresSection.title}
        titleId={featuresSection.titleId}
      />

      {featureGroups.map(({ id, ...group }) => (
        <FeatureGroup key={id} {...group} />
      ))}
    </section>
  )
}
