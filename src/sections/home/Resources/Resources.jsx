import { SectionHeading } from '@components'
import { resourceShowcases, resourcesSection } from '@data/resources.js'
import { ResourceShowcase } from './ResourceShowcase.jsx'

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

      {resourceShowcases.map((showcase) => {
        const {
          id,
          icon,
          title,
          lead,
          cta,
          href,
          overview,
          meta,
          expertise,
          users,
          avatars,
        } = showcase

        return (
          <ResourceShowcase
            key={id}
            icon={icon}
            title={title}
            lead={lead}
            cta={cta}
            href={href}
            overview={overview}
            meta={meta}
            expertise={expertise}
            users={users}
            avatars={avatars}
          />
        )
      })}
    </section>
  )
}
