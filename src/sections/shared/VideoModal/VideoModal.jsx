import { Icon } from '@components'
import { videoModal } from '@data/video-modal.js'
import './VideoModal.css'

export function VideoModal() {
  return (
    <dialog
      className="video-modal"
      aria-labelledby="video-modal-title"
      data-video-modal
    >
      <div className="video-modal__panel">
        <div className="video-modal__bar">
          <h2 className="video-modal__title" id="video-modal-title">
            <span data-video-modal-title></span>
          </h2>

          <button
            className="video-modal__close"
            type="button"
            aria-label={videoModal.closeLabel}
            data-video-modal-close
          >
            <Icon name="ui/close" />
          </button>
        </div>

        <div className="video-modal__player" data-video-modal-player></div>
      </div>
    </dialog>
  )
}
