import { Button, Heading, Icon, MetaGrid, Photo } from '@components'
import { cardPhotoBreakpoints, resourceRowPhotoSizes } from '@data/card-photos.js'
import { resourceLibrary } from '@data/resources.js'
import './ResourceRow.css'

export function ResourceRow(props) {
  const { titleId, icon, title, lead, text, image, meta } = props

  const { downloadLabel, downloadHref } = resourceLibrary

  return (
    <article className="resource-row" aria-labelledby={titleId}>
      <div className="resource-row__inner container">
        <div className="resource-row__intro">
          <Icon name={icon} className="resource-row__icon" />

          <div className="resource-row__summary">
            <Heading
              level={3}
              size="h3"
              id={titleId}
              className="resource-row__title"
            >
              {title}
            </Heading>
            <p>{lead}</p>
          </div>
        </div>

        <div className="resource-row__panel">
          <div className="resource-row__lead">
            <Photo
              src={image}
              alt=""
              ariaHidden="true"
              sizes={resourceRowPhotoSizes}
              breakpoints={cardPhotoBreakpoints}
              className="resource-row__photo"
            />

            <div className="resource-row__details">
              <div className="resource-row__text">
                <p className="resource-row__name">{title}</p>
                <p>{text}</p>
              </div>
              <Button
                variant="ghost"
                icon="ui/arrow-up-right"
                href={downloadHref}
                className="resource-row__download"
              >
                {downloadLabel}
                <span className="visually-hidden">: {title}</span>
              </Button>
            </div>
          </div>

          <MetaGrid items={meta} isCard className="resource-row__meta" />
        </div>
      </div>
    </article>
  )
}
