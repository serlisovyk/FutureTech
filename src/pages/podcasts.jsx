import { PodcastsIntro, TopPodcasts } from '@sections'

export const metadata = {
  title: 'Podcasts',
  description:
    'Conversations about technology and the future from the FutureTech podcast.',
}

export default function PodcastsPage() {
  return (
    <>
      <PodcastsIntro />
      <TopPodcasts />
    </>
  )
}
