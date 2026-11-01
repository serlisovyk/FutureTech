import { Head } from 'minista/head'

export function SeoMeta(props) {
  const { description, canonicalUrl, robots } = props

  return (
    <Head>
      <meta name="description" content={description} />

      {robots && <meta name="robots" content={robots} />}

      {!robots && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  )
}
