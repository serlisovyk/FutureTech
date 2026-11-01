import { SectionHeading } from '@components'
import { featureGroups, featuresSection } from '@data'
import { FeatureGroup } from './FeatureGroup'

export function Features() {
  const { id, titleId, tag, title } = featuresSection

  return (
    <section className="features" id={id} aria-labelledby={titleId}>
      <SectionHeading tag={tag} title={title} titleId={titleId} />

      {featureGroups.map(({ id: groupId, ...group }) => (
        <FeatureGroup key={groupId} {...group} />
      ))}
    </section>
  )
}
