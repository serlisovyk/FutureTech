import { Icon } from '@components'
import './FaqItem.css'

export function FaqItem({ answerId, question, answer, isOpen = false }) {
  return (
    <li className="faq-item" data-disclosure>
      <button
        className="faq-item__button"
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        data-disclosure-trigger
      >
        <span className="faq-item__question">{question}</span>
        <Icon name="ui/plus" className="faq-item__icon faq-item__icon--plus" />
        <Icon name="ui/minus" className="faq-item__icon faq-item__icon--minus" />
      </button>

      <div className="faq-item__region" id={answerId} data-disclosure-region>
        <div className="faq-item__answer">
          <p className="faq-item__text">{answer}</p>
        </div>
      </div>
    </li>
  )
}
