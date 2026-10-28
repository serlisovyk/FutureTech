import { Svg } from 'minista/assets'
import { Heading } from '@components/Heading.jsx'
import { Icon } from '@components/Icon.jsx'
import { Tag } from '@components/Tag.jsx'
import { cta } from '@data/cta.js'
import './CtaRevolution.css'

const TITLE_ID = 'cta-revolution-title'

export function CtaRevolution() {
  return (
    <section className="cta-revolution" aria-labelledby={TITLE_ID}>
      <div className="cta-revolution__inner container">
        <div className="cta-revolution__intro">
          <Svg
            src="/src/assets/logos/logo-mark.svg"
            className="cta-revolution__logo"
            aria-hidden="true"
          />
          <div className="cta-revolution__tag">
            <Tag>{cta.tag}</Tag>
          </div>
          <div className="cta-revolution__text">
            <Heading level={2} size="h2" id={TITLE_ID}>
              {cta.title}
            </Heading>
            <p className="cta-revolution__lead">{cta.text}</p>
          </div>
        </div>
        <ul className="cta-revolution__cards">
          {cta.cards.map((card) => (
            <li key={card.id} className="cta-revolution__item">
              <a className="cta-revolution__card" href={card.href}>
                <div className="cta-revolution__card-head">
                  <h3 className="cta-revolution__card-title">{card.title}</h3>
                  <span className="cta-revolution__arrow">
                    <Icon
                      name="arrow-up-right"
                      className="cta-revolution__arrow-icon"
                    />
                  </span>
                </div>
                <p>{card.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
