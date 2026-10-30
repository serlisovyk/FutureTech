import { PageIntro } from '@components'
import { newsIntro } from '@data/news.js'
import { FeaturedNews } from '@sections'

export const metadata = {
  title: 'News',
  description: 'The latest technology news and articles from FutureTech.',
}

export default function NewsPage() {
  return (
    <>
      <PageIntro
        titleId={newsIntro.titleId}
        titleStart={newsIntro.titleStart}
        titleEnd={newsIntro.titleEnd}
        text={newsIntro.text}
      />
      <FeaturedNews />
    </>
  )
}
