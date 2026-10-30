import { PageIntro } from '@components'
import { podcastsIntro } from '@data/podcasts.js'

export function PodcastsIntro() {
  return (
    <PageIntro
      titleId={podcastsIntro.titleId}
      titleStart={podcastsIntro.titleStart}
      titleEnd={podcastsIntro.titleEnd}
      text={podcastsIntro.text}
    />
  )
}
