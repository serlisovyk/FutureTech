import { BrowserMeta, FontPreloads, JsonLd, SeoMeta, SocialMeta } from '@components'
import { CtaRevolution, Footer, Header, VideoModal } from '@sections'
import { getAbsoluteUrl, getPageTitle } from '@utils'
import { mainId } from '@data'
import '@styles/global.css'

export default function Layout(props) {
  const { url, title, description, robots, post, children } = props

  const pageTitle = getPageTitle(title)

  const canonicalUrl = getAbsoluteUrl(url)

  return (
    <html lang="en" data-reveal-root>
      <head>
        <title>{pageTitle}</title>

        <FontPreloads />

        <script type="module" src="/src/scripts/main.js"></script>

        <SeoMeta
          description={description}
          canonicalUrl={canonicalUrl}
          robots={robots}
        />

        <BrowserMeta />

        <SocialMeta
          title={title}
          description={description}
          canonicalUrl={canonicalUrl}
          post={post}
        />

        <JsonLd canonicalUrl={canonicalUrl} post={post} />
      </head>

      <body>
        <Header currentPath={url} />

        <main className="main" id={mainId} tabIndex={-1}>
          {children}
        </main>

        <CtaRevolution />

        <Footer />

        <VideoModal />
      </body>
    </html>
  )
}
