import { SELECTORS, VIDEO_EMBED } from '@constants'

export class VideoModal {
  #root
  #title
  #player
  #opener
  #isPressOnRoot

  constructor(root) {
    this.#root = root
    this.#title = root.querySelector(SELECTORS.videoModalTitle)
    this.#player = root.querySelector(SELECTORS.videoModalPlayer)
    this.#opener = null
    this.#isPressOnRoot = false
  }

  start() {
    this.#root.addEventListener('pointerdown', (event) =>
      this.#handlePointerDown(event),
    )
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

  #handlePointerDown(event) {
    this.#isPressOnRoot = event.target === this.#root
  }

  #handleClick(event) {
    const isBackdrop = this.#isPressOnRoot && event.target === this.#root

    const isCloseButton = event.target.closest(SELECTORS.videoModalClose)
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

    return frame
  }
}
