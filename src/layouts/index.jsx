import { Head } from 'minista/head'
import '@styles/global.css'
import interRegular from '@assets/fonts/inter-latin-400.woff2'
import kumbhSansMedium from '@assets/fonts/kumbh-sans-latin-500.woff2'
import { CtaRevolution, Footer, Header, VideoModal } from '@sections'
import { getPageTitle } from '@utils'

export default function Layout({ url, title, description, robots, children }) {
  const pageTitle = getPageTitle(title)

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
