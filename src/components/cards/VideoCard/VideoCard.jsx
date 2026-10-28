import { clsx } from 'clsx'
import { Photo } from '@components/media/Photo'
import { Button } from '@components/ui/Button'
import {
  cardPhotoBreakpoints,
  episodeCardPhotoSizes,
  videoCardPhotoSizes,
} from '@data/card-photos.js'
import { VideoCardPlay } from './VideoCardPlay.jsx'
import './VideoCard.css'

export function VideoCard({
  title,
  text,
  duration,
  image,
  videoId,
  isEpisode = false,
}) {
  const photoSizes = isEpisode ? episodeCardPhotoSizes : videoCardPhotoSizes

  return (
    <article className={clsx('video-card', isEpisode && 'video-card--episode')}>
      <div className="video-card__preview">
        <Photo
          src={image}
          alt=""
          ariaHidden="true"
          sizes={photoSizes}
          breakpoints={cardPhotoBreakpoints}
          className="video-card__photo"
        />
        <div className="video-card__controls">
          <VideoCardPlay title={title} videoId={videoId} />
          <span className="video-card__duration">{duration}</span>
        </div>
      </div>
      <div className="video-card__body">
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__text">{text}</p>
      </div>
      {isEpisode && (
        <Button
          variant="outline"
          icon="ui/arrow-up-right"
          className="video-card__button"
        >
          Listen Podcast
          <span className="visually-hidden">: {title}</span>
        </Button>
      )}
    </article>
  )
}
