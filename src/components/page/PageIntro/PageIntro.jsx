import { Heading } from '@components/ui/Heading'
import './PageIntro.css'

export function PageIntro({ titleId, titleStart, titleEnd, text }) {
  return (
    <section className="page-intro container" aria-labelledby={titleId}>
      <Heading level={1} size="display" id={titleId} className="page-intro__title">
        <span className="page-intro__title-start">{titleStart}</span>{' '}
        <span className="page-intro__title-end">{titleEnd}</span>
      </Heading>
      <p className="page-intro__text">{text}</p>
    </section>
  )
}
