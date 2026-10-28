import { Icon } from '@components/media/Icon'
import './PlayButton.css'

export function PlayButton({ title, videoId }) {
  return (
    <button
      className="play-button"
      type="button"
      data-video-id={videoId}
      data-video-title={title}
      aria-label={`Play: ${title}`}
    >
      <Icon name="ui/play" className="play-button__icon" />
    </button>
  )
}
