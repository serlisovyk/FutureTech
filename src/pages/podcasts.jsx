import { LatestPodcasts, PodcastsIntro, TopPodcasts } from '@sections'
import { pages } from '@data'

export const metadata = pages.podcasts

export default function PodcastsPage() {
  return (
    <>
      <PodcastsIntro />
      <TopPodcasts />
      <LatestPodcasts />
    </>
  )
}
