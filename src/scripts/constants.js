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

export const REVEAL = Object.freeze({
  hookName: 'data-reveal',
  itemSelector: '[data-reveal]',
  readyClass: 'is-reveal-ready',
  shownClass: 'is-revealed',
  indexProperty: '--reveal-index',
  rootMargin: '0px 0px -64px 0px',
  maxIndex: 5,
})

export const TABLE_OF_CONTENTS = Object.freeze({
  rootMargin: '0px 0px -80% 0px',
  currentValue: 'location',
})

export const STORAGE = Object.freeze({
  likePrefix: 'futuretech:liked:',
  likedValue: '1',
})

export const SELECTORS = Object.freeze({
  articleBody: '[data-article-body]',
  articleSection: '[data-article-section]',
  tableOfContents: '[data-table-of-contents]',
  tableOfContentsLink: '[data-table-of-contents-link]',
  likeCount: '[data-like-count]',
  disclosureRegion: '[data-disclosure-region]',
  videoTrigger: '[data-video-id]',
  postFeedRow: '[data-category]',
  postFeedPanel: '[data-post-feed-panel]',
  postFeedEmpty: '[data-post-feed-empty]',
  postFeedStatus: '[data-post-feed-status]',
  formField: '[data-form-field]',
  formControl: '[data-form-control]',
  formCountry: '[data-form-country]',
  formFlag: '[data-form-flag]',
  formStatus: '[data-form-status]',
})

export const VALIDITY_ERRORS = Object.freeze({
  valueMissing: 'errorValueMissing',
  typeMismatch: 'errorTypeMismatch',
  patternMismatch: 'errorPatternMismatch',
})

export const ALL_CATEGORY = 'all'

export const VIDEO_EMBED = Object.freeze({
  baseUrl: 'https://www.youtube-nocookie.com/embed/',
  query: '?autoplay=1&rel=0',
  allow: 'autoplay; encrypted-media; picture-in-picture; fullscreen',
})

export const NO_INDEX = -1
