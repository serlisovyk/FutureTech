import { Icon } from '@components/media/Icon'
import { uiLabels } from '@data'
import './PlayButton.css'

export function PlayButton({ title, videoId }) {
  const { play } = uiLabels

  return (
    <button
      className="play-button"
      type="button"
      data-video-id={videoId}
      data-video-title={title}
      aria-label={`${play}: ${title}`}
    >
      <Icon name="ui/play" className="play-button__icon" />
    </button>
  )
}
