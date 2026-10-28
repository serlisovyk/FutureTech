import { VideoModal } from '@scripts/components/VideoModal.js'
import { SELECTORS } from '@scripts/constants.js'

export class VideoModalController {
  #modal

  constructor(root) {
    this.#modal = new VideoModal(root)
  }

  start() {
    this.#modal.start()

    document.addEventListener('click', (event) => this.#handleClick(event))
  }

  #handleClick(event) {
    const trigger = event.target.closest(SELECTORS.videoTrigger)
    if (!trigger) return

    const { videoId, videoTitle } = trigger.dataset

    this.#modal.open(videoId, videoTitle, trigger)
  }
}
