import { Svg } from 'minista/assets'
import { Heading, Icon, Tag } from '@components'
import { cta } from '@data/cta.js'
import './CtaRevolution.css'

export function CtaRevolution() {
  return (
    <section className="cta-revolution" aria-labelledby={cta.titleId}>
      <div className="cta-revolution__inner container">
        <div className="cta-revolution__intro" data-reveal>
          <Svg
            src="/src/assets/logos/logo-mark.svg"
            className="cta-revolution__logo"
            aria-hidden="true"
          />
          <div className="cta-revolution__tag">
            <Tag>{cta.tag}</Tag>
          </div>
          <div className="cta-revolution__text">
            <Heading level={2} size="h2" id={cta.titleId}>
              {cta.title}
            </Heading>
            <p className="cta-revolution__lead">{cta.text}</p>
          </div>
        </div>
        <ul className="cta-revolution__cards">
          {cta.cards.map(({ id, href, title, text }) => (
            <li key={id} className="cta-revolution__item" data-reveal>
              <a className="cta-revolution__card" href={href}>
                <div className="cta-revolution__card-head">
                  <h3 className="cta-revolution__card-title">{title}</h3>
                  <span className="cta-revolution__arrow">
                    <Icon
                      name="ui/arrow-up-right"
                      className="cta-revolution__arrow-icon"
                    />
                  </span>
                </div>
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
