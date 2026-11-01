const TABLET_WIDTH = 1024
const MOBILE_WIDTH = 768

export const BREAKPOINTS = Object.freeze({
  tablet: TABLET_WIDTH,
  mobile: MOBILE_WIDTH,
})

export const MEDIA = Object.freeze({
  mobileMenu: `(width < ${MOBILE_WIDTH}px)`,
  reducedMotion: '(prefers-reduced-motion: reduce)',
})
