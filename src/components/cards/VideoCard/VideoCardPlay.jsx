import { Icon } from '@components/media/Icon'

export function VideoCardPlay({ title, videoId }) {
  return (
    <button
      className="video-card__play"
      type="button"
      data-video-id={videoId}
      data-video-title={title}
      aria-label={`Play: ${title}`}
    >
      <Icon name="ui/play" className="video-card__play-icon" />
    </button>
  )
}
