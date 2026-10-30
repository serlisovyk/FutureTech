import { Button, Heading, Icon, MetaGrid, Photo, PlayButton } from '@components'
import { cardPhotoBreakpoints, podcastShowPhotoSizes } from '@data/card-photos.js'
import './PodcastShow.css'

export function PodcastShow(props) {
  const {
    titleId,
    icon,
    title,
    rating,
    ratingLabel,
    host,
    tagline,
    text,
    image,
    videoId,
    stats,
  } = props

  const hostItems = [{ label: 'Host', value: host }]

  return (
    <article className="podcast-show" aria-labelledby={titleId}>
      <div className="podcast-show__inner container" data-reveal>
        <div className="podcast-show__intro">
          <Icon name={icon} className="podcast-show__icon" />

          <div className="podcast-show__summary">
            <div className="podcast-show__heading">
              <Heading
                level={3}
                size="h3"
                id={titleId}
                className="podcast-show__title"
              >
                {title}
              </Heading>
              <p className="podcast-show__rating">
                {Array.from({ length: rating }, (_, index) => (
                  <Icon key={index} name="ui/star" className="podcast-show__star" />
                ))}
                <span className="visually-hidden">{ratingLabel}</span>
              </p>
            </div>

            <div className="podcast-show__host">
              <MetaGrid items={hostItems} className="podcast-show__host-meta" />
              <Button
                variant="outline"
                icon="ui/arrow-up-right"
                className="podcast-show__listen"
                videoId={videoId}
                videoTitle={title}
              >
                Listen Podcast
                <span className="visually-hidden">: {title}</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="podcast-show__panel">
          <div className="podcast-show__lead">
            <div className="podcast-show__preview">
              <Photo
                src={image}
                alt=""
                ariaHidden="true"
                sizes={podcastShowPhotoSizes}
                breakpoints={cardPhotoBreakpoints}
                className="podcast-show__photo"
              />
              <div className="podcast-show__controls">
                <PlayButton title={title} videoId={videoId} />
              </div>
            </div>
            <div className="podcast-show__text">
              <h4 className="podcast-show__lead-title">{tagline}</h4>
              <p>{text}</p>
            </div>
          </div>

          <MetaGrid items={stats} isCard className="podcast-show__stats" />
        </div>
      </div>
    </article>
  )
}
