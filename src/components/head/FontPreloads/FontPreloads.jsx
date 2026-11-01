import { interMedium, interRegular, kumbhSansMedium } from '@assets/fonts'

export function FontPreloads() {
  return (
    <>
      <link
        rel="preload"
        href={interRegular}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href={interMedium}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href={kumbhSansMedium}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  )
}
