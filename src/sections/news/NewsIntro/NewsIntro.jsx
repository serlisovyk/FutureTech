import { PageIntro } from '@components'
import { newsIntro } from '@data'

export function NewsIntro() {
  return <PageIntro {...newsIntro} isSpacious />
}
