import { Head } from 'minista/head'

export function ArticleMeta(props) {
  const {
    post: {
      date,
      author: { name: authorName },
    },
  } = props

  return (
    <Head>
      <meta property="article:published_time" content={date} />

      <meta property="article:author" content={authorName} />
    </Head>
  )
}
