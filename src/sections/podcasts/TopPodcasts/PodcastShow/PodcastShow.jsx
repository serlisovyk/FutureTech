import {
  Button,
  Heading,
  Icon,
  MetaGrid,
  Photo,
  PlayButton,
  Rating,
} from '@components'
import { cardPhotoBreakpoints, podcastShowPhotoSizes, uiLabels } from '@data'
import './PodcastShow.css'

export function PodcastShow(props) {
  const {
    titleId,
    icon,
    title,
    rating,
    host,
    tagline,
    text,
    image,
    videoId,
    stats,
  } = props

  const { host: hostLabel, listenPodcast } = uiLabels

  const hostItems = [{ label: hostLabel, value: host }]

  const hiddenLabel = `: ${title}`

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
              <Rating value={rating} className="podcast-show__rating" isCompact />
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
                {listenPodcast}
                <span className="visually-hidden">{hiddenLabel}</span>
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
              <p className="podcast-show__lead-title">{tagline}</p>
              <p>{text}</p>
            </div>
          </div>

          <MetaGrid items={stats} isCard className="podcast-show__stats" />
        </div>
      </div>
    </article>
  )
}
