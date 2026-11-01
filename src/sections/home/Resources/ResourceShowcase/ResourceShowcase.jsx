import { AvatarGroup, Button, Heading, Icon, MetaGrid, Photo } from '@components'
import { resourcesSection } from '@data'
import './ResourceShowcase.css'

export function ResourceShowcase(props) {
  const {
    icon,
    title,
    lead,
    cta,
    href,
    overview: { title: overviewTitle, text: overviewText, image: overviewImage },
    meta,
    expertise,
    users,
    avatars,
  } = props

  const { audienceLabel, previewLabel, photoSizes, photoBreakpoints } =
    resourcesSection

  const [total, formats] = meta

  const { label: formatsLabel, value: formatsValue } = formats

  return (
    <div className="resource-showcase">
      <div className="resource-showcase__layout split-layout container" data-reveal>
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
            <h4 className="resource-showcase__overview-title">{overviewTitle}</h4>
            <p className="resource-showcase__overview-text">{overviewText}</p>
          </div>

          <Photo
            src={overviewImage}
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
                  <dt>{formatsLabel}</dt>
                  <dd className="resource-showcase__format-value">{formatsValue}</dd>
                </dl>
                <Button variant="outline" icon="ui/eye" href={href}>
                  {previewLabel}
                  <span className="visually-hidden">: {title}</span>
                </Button>
              </div>
            </div>

            <MetaGrid items={[expertise]} isCard />
          </div>
        </div>
      </div>
    </div>
  )
}
