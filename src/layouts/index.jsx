import '../styles/global.css'

export default function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <script type="module" src="/src/scripts/main.js"></script>
      </head>
      <body>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  )
}
