import { Icon } from '@components'
import { videoModal } from '@data'
import './VideoModal.css'

export function VideoModal() {
  const { titleId, closeLabel } = videoModal

  return (
    <dialog className="video-modal" aria-labelledby={titleId} data-video-modal>
      <div className="video-modal__panel">
        <div className="video-modal__bar">
          <h2 className="video-modal__title" id={titleId}>
            <span data-video-modal-title></span>
          </h2>

          <button
            className="video-modal__close"
            type="button"
            aria-label={closeLabel}
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
