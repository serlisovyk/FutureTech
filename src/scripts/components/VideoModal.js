import { VIDEO_EMBED } from '@scripts/constants.js'

export class VideoModal {
  #root
  #title
  #player
  #opener

  constructor(root) {
    this.#root = root
    this.#title = root.querySelector('[data-video-modal-title]')
    this.#player = root.querySelector('[data-video-modal-player]')
    this.#opener = null
  }

  start() {
    this.#root.addEventListener('click', (event) => this.#handleClick(event))
    this.#root.addEventListener('close', () => this.#handleClose())
  }

  open(videoId, videoTitle, opener) {
    this.#opener = opener
    this.#title.textContent = videoTitle
    this.#player.replaceChildren(VideoModal.#createFrame(videoId, videoTitle))

    this.#root.showModal()
  }

  close() {
    this.#root.close()
  }

  #handleClick(event) {
    const isBackdrop = event.target === this.#root
    const isCloseButton = event.target.closest('[data-video-modal-close]')
    if (!isBackdrop && !isCloseButton) return

    this.close()
  }

  #handleClose() {
    this.#player.replaceChildren()
    this.#opener.focus()
  }

  static #createFrame(videoId, videoTitle) {
    const frame = document.createElement('iframe')

    frame.src = `${VIDEO_EMBED.baseUrl}${encodeURIComponent(videoId)}${VIDEO_EMBED.query}`
    frame.title = videoTitle
    frame.allow = VIDEO_EMBED.allow
    frame.allowFullscreen = true

    return frame
  }
}
