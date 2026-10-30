import { AvatarGroup, Button, Heading, Icon, MetaGrid, Photo } from '@components'
import { resourcesSection } from '@data/resources.js'
import './ResourceShowcase.css'

export function ResourceShowcase(props) {
  const { icon, title, lead, cta, href, overview, meta, expertise, users, avatars } =
    props

  const { audienceLabel, previewLabel, photoSizes, photoBreakpoints } =
    resourcesSection

  const [total, formats] = meta

  return (
    <div className="resource-showcase container" data-reveal>
      <div className="resource-showcase__main">
        <div className="resource-showcase__intro">
          <Icon name={icon} className="resource-showcase__icon" />
          <div className="resource-showcase__text">
            <Heading level={3} size="h3">
              {title}
            </Heading>
            <p className="resource-showcase__lead">{lead}</p>
          </div>
          <Button variant="ghost" icon="ui/arrow-up-right" href={href}>
            {cta}
          </Button>
        </div>

        <div className="resource-showcase__audience">
          <div className="resource-showcase__users">
            <p>{audienceLabel}</p>
            <p className="resource-showcase__users-count">{users}</p>
          </div>
          <AvatarGroup avatars={avatars} />
        </div>
      </div>

      <div className="resource-showcase__panel">
        <div className="resource-showcase__overview">
          <h4 className="resource-showcase__overview-title">{overview.title}</h4>
          <p className="resource-showcase__overview-text">{overview.text}</p>
        </div>

        <Photo
          src={overview.image}
          alt=""
          ariaHidden="true"
          sizes={photoSizes}
          breakpoints={photoBreakpoints}
          className="resource-showcase__photo"
        />

        <div className="resource-showcase__details">
          <div className="resource-showcase__facts">
            <div className="resource-showcase__total">
              <MetaGrid items={[total]} isCard />
            </div>
            <div className="resource-showcase__formats">
              <dl className="resource-showcase__format">
                <dt>{formats.label}</dt>
                <dd className="resource-showcase__format-value">{formats.value}</dd>
              </dl>
              <Button variant="outline" icon="ui/arrow-up-right" href={href}>
                {previewLabel}
                <span className="visually-hidden">: {title}</span>
              </Button>
            </div>
          </div>

          <MetaGrid items={[expertise]} isCard />
        </div>
      </div>
    </div>
  )
}
