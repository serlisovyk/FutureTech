import { PageIntro } from '@components'
import { newsIntro } from '@data/news.js'

export function NewsIntro() {
  return (
    <PageIntro
      titleId={newsIntro.titleId}
      titleStart={newsIntro.titleStart}
      titleEnd={newsIntro.titleEnd}
      text={newsIntro.text}
      isSpacious
    />
  )
}
