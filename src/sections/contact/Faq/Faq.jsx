import { Button, Heading, Icon } from '@components'
import { faq, faqSection } from '@data/faq.js'
import { FaqItem } from './FaqItem.jsx'
import './Faq.css'

export function Faq() {
  const { id, titleId, icon, title, text, askLabel, askHref } = faqSection

  return (
    <section className="faq" id={id} aria-labelledby={titleId}>
      <div className="faq__inner container">
        <div className="faq__intro">
          <Icon name={icon} className="faq__icon" />

          <div className="faq__summary">
            <Heading level={2} size="h3" id={titleId} className="faq__title">
              {title}
            </Heading>
            <p>{text}</p>
          </div>

          <Button variant="ghost" icon="ui/arrow-up-right" href={askHref} isCompact>
            {askLabel}
          </Button>
        </div>

        <ul className="faq__list">
          {faq.map((item, index) => {
            const { id: itemId, answerId, question, answer } = item

            const isOpen = index === 0

            return (
              <FaqItem
                key={itemId}
                answerId={answerId}
                question={question}
                answer={answer}
                isOpen={isOpen}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}
