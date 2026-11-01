import { Button, PageIntro } from '@components'
import { notFound } from '@data'

export function NotFoundIntro() {
  const { titleId, titleStart, titleEnd, text, actionLabel, actionHref } = notFound

  return (
    <PageIntro
      titleId={titleId}
      titleStart={titleStart}
      titleEnd={titleEnd}
      text={text}
    >
      <Button href={actionHref} icon="ui/arrow-up-right">
        {actionLabel}
      </Button>
    </PageIntro>
  )
}
