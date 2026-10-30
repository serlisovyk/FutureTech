import { Head } from 'minista/head'
import '@styles/global.css'
import interRegular from '@assets/fonts/inter-latin-400.woff2'
import kumbhSansMedium from '@assets/fonts/kumbh-sans-latin-500.woff2'
import { CtaRevolution, Footer, Header, VideoModal } from '@sections'
import { site } from '@data/site.js'
import { getAbsoluteUrl, getPageTitle, getSocialMeta } from '@utils'

export default function Layout(props) {
  const { url, title, description, robots, post, children } = props

  const pageTitle = getPageTitle(title)
  const socialTitle = title || site.name
  const canonicalUrl = getAbsoluteUrl(url)
  const { type, image } = getSocialMeta(post)

  return (
    <html lang="en" data-reveal-root>
      <head>
        <title>{pageTitle}</title>
        <link
          rel="preload"
          href={interRegular}
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
        <script type="module" src="/src/scripts/main.js"></script>
        <Head>
          <meta name="description" content={description} />
          {robots && <meta name="robots" content={robots} />}
          <link rel="canonical" href={canonicalUrl} />
          <meta name="theme-color" content={site.themeColor} />
          <link rel="icon" href={site.icons.svg} type="image/svg+xml" />
          <link
            rel="icon"
            href={site.icons.png}
            type="image/png"
            sizes={site.icons.pngSize}
          />
          <link rel="apple-touch-icon" href={site.icons.apple} />
          <meta property="og:site_name" content={site.name} />
          <meta property="og:locale" content={site.locale} />
          <meta property="og:type" content={type} />
          <meta property="og:title" content={socialTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={image.url} />
          {image.width && <meta property="og:image:width" content={image.width} />}
          {image.height && (
            <meta property="og:image:height" content={image.height} />
          )}
          <meta property="og:image:alt" content={image.alt} />
          <meta name="twitter:card" content="summary_large_image" />
          {post && <meta property="article:published_time" content={post.date} />}
          {post && <meta property="article:author" content={post.author.name} />}
        </Head>
      </head>
      <body>
        <Header currentPath={url} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <CtaRevolution />
        <Footer />
        <VideoModal />
      </body>
    </html>
  )
}
