import {
  FeaturedNews,
  FeaturedVideos,
  NewsHub,
  NewsIntro,
  TrendingStories,
} from '@sections'
import { pages } from '@data'

export const metadata = pages.news

export default function NewsPage() {
  return (
    <>
      <NewsIntro />
      <FeaturedNews />
      <TrendingStories />
      <NewsHub />
      <FeaturedVideos />
    </>
  )
}
