import '@styles/global.css'
import interRegular from '@assets/fonts/inter-latin-400.woff2'
import kumbhSansMedium from '@assets/fonts/kumbh-sans-latin-500.woff2'
import { Footer } from '@sections/shared/Footer.jsx'

export default function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
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
      </head>
      <body>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
