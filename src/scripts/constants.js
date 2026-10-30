export const KEYS = Object.freeze({
  escape: 'Escape',
  home: 'Home',
  end: 'End',
  arrowLeft: 'ArrowLeft',
  arrowRight: 'ArrowRight',
})

export const MEDIA = Object.freeze({
  mobileMenu: '(width < 768px)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
})

export const COUNT_UP = Object.freeze({
  duration: 1500,
  threshold: 0.5,
  easingPower: 3,
  numberPattern: /^(\d+)(\D*)$/,
})

export const SELECTORS = Object.freeze({
  videoTrigger: '[data-video-id]',
  postFeedRow: '[data-category]',
  postFeedPanel: '[data-post-feed-panel]',
  postFeedEmpty: '[data-post-feed-empty]',
  postFeedStatus: '[data-post-feed-status]',
})

export const ALL_CATEGORY = 'all'

export const VIDEO_EMBED = Object.freeze({
  baseUrl: 'https://www.youtube-nocookie.com/embed/',
  query: '?autoplay=1&rel=0',
  allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen',
})

export const NO_INDEX = -1
