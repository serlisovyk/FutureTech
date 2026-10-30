import { FeaturedNews, NewsHub, NewsIntro, TrendingStories } from '@sections'

export const metadata = {
  title: 'News',
  description: 'The latest technology news and articles from FutureTech.',
}

export default function NewsPage() {
  return (
    <>
      <NewsIntro />
      <FeaturedNews />
      <TrendingStories />
      <NewsHub />
    </>
  )
}
