import { Button, SectionHeading } from '@components'
import { episodes, latestPodcasts } from '@data/podcasts.js'
import { EpisodeGroup } from './EpisodeGroup.jsx'
import './LatestPodcasts.css'

export function LatestPodcasts() {
  const { id, titleId, moreId, tag, title, moreLabel, initialCount } = latestPodcasts

  const firstItems = episodes.slice(0, initialCount)
  const moreItems = episodes.slice(initialCount)

  return (
    <section
      className="latest-podcasts"
      id={id}
      aria-labelledby={titleId}
      data-disclosure
    >
      <SectionHeading tag={tag} title={title} titleId={titleId}>
        <Button
          variant="outline"
          icon="ui/arrow-up-right"
          ariaControls={moreId}
          ariaExpanded={false}
          className="latest-podcasts__more"
          isDisclosureTrigger
        >
          {moreLabel}
        </Button>
      </SectionHeading>

      <div className="latest-podcasts__grid container">
        <EpisodeGroup items={firstItems} />

        <EpisodeGroup items={moreItems} id={moreId} isRegion />
      </div>
    </section>
  )
}
