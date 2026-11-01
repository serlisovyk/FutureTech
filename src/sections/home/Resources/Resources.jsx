import { SectionHeading } from '@components'
import { resourceShowcases, resourcesSection } from '@data'
import { ResourceShowcase } from './ResourceShowcase'

export function Resources() {
  const { id, titleId, tag, title, link } = resourcesSection

  return (
    <section className="resources" id={id} aria-labelledby={titleId}>
      <SectionHeading tag={tag} title={title} titleId={titleId} link={link} />

      {resourceShowcases.map(({ id: showcaseId, ...showcase }) => (
        <ResourceShowcase key={showcaseId} {...showcase} />
      ))}
    </section>
  )
}
