import { DisclosureSection, VideoCard } from '@components'
import { episodes, latestPodcasts } from '@data'
import './LatestPodcasts.css'

export function LatestPodcasts() {
  return (
    <DisclosureSection {...latestPodcasts} className="latest-podcasts">
      {episodes.map(({ id, ...episode }) => (
        <VideoCard key={id} {...episode} isEpisode />
      ))}
    </DisclosureSection>
  )
}
