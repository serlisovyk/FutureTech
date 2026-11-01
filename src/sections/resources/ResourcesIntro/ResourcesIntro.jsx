import { PageIntro } from '@components'
import { resourcesIntro } from '@data'

export function ResourcesIntro() {
  return (
    <PageIntro
      titleId={resourcesIntro.titleId}
      titleStart={resourcesIntro.titleStart}
      titleEnd={resourcesIntro.titleEnd}
      text={resourcesIntro.text}
    />
  )
}
