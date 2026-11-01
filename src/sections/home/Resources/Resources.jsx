import { SectionHeading } from '@components'
import { resourceShowcases, resourcesSection } from '@data'
import { ResourceShowcase } from './ResourceShowcase'

export function Resources() {
  return (
    <section
      className="resources"
      id={resourcesSection.id}
      aria-labelledby={resourcesSection.titleId}
    >
      <SectionHeading
        tag={resourcesSection.tag}
        title={resourcesSection.title}
        titleId={resourcesSection.titleId}
        link={resourcesSection.link}
      />

      {resourceShowcases.map(({ id, ...showcase }) => (
        <ResourceShowcase key={id} {...showcase} />
      ))}
    </section>
  )
}
