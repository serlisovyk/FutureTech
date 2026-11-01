import { Svg } from 'minista/assets'
import { ArrowCircle, Heading, LinkCard, Tag } from '@components'
import { cta } from '@data'
import './CtaRevolution.css'

export function CtaRevolution() {
  const { titleId, tag, title, text, cards } = cta

  return (
    <section className="cta-revolution" aria-labelledby={titleId}>
      <div className="cta-revolution__inner container">
        <div className="cta-revolution__intro" data-reveal>
          <Svg
            src="/src/assets/logos/logo-mark.svg"
            className="cta-revolution__logo"
            aria-hidden="true"
          />
          <div className="cta-revolution__tag">
            <Tag>{tag}</Tag>
          </div>
          <div className="cta-revolution__text">
            <Heading level={2} size="h2" id={titleId}>
              {title}
            </Heading>
            <p className="cta-revolution__lead">{text}</p>
          </div>
        </div>
        <ul className="cta-revolution__cards">
          {cards.map(({ id, href, title: cardTitle, text: cardText }) => (
            <li key={id} className="cta-revolution__item" data-reveal>
              <LinkCard href={href} className="cta-revolution__card">
                <div className="cta-revolution__card-head">
                  <h3 className="cta-revolution__card-title">{cardTitle}</h3>
                  <ArrowCircle />
                </div>
                <p>{cardText}</p>
              </LinkCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
