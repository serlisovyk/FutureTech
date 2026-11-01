import { Head } from 'minista/head'
import { site } from '@data'

export function BrowserMeta() {
  const {
    viewport,
    themeColor,
    icons: { svg: svgIcon, png: pngIcon, pngSize },
  } = site

  return (
    <Head>
      <meta name="viewport" content={viewport} />

      <meta name="theme-color" content={themeColor} />

      <link rel="icon" href={svgIcon} type="image/svg+xml" />

      <link rel="icon" href={pngIcon} type="image/png" sizes={pngSize} />
    </Head>
  )
}
