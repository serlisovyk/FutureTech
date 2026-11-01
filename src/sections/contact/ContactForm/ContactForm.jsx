import { Button, Heading, Icon } from '@components'
import { contactFields, contactForm } from '@data'
import { ConsentField } from './ConsentField'
import { MessageField } from './MessageField'
import { PhoneField } from './PhoneField'
import { TextField } from './TextField'
import './ContactForm.css'

export function ContactForm() {
  const { id, titleId, icon, title, submitLabel, successMessage } = contactForm
  const { firstName, lastName, email, phone, message, consent } = contactFields

  return (
    <section className="contact-form" aria-labelledby={titleId}>
      <div className="contact-form__inner container">
        <div className="contact-form__intro" data-reveal>
          <Icon name={icon} className="contact-form__icon" />

          <Heading level={2} id={titleId} className="contact-form__title">
            {title}
          </Heading>
        </div>

        <form
          className="contact-form__form"
          id={id}
          method="post"
          data-contact-form
          data-reveal
        >
          <div className="contact-form__row">
            <TextField {...firstName} />
            <TextField {...lastName} />
          </div>

          <div className="contact-form__row">
            <TextField {...email} />
            <PhoneField {...phone} />
          </div>

          <MessageField {...message} />

          <div className="contact-form__actions">
            <div className="contact-form__footer">
              <div className="contact-form__consent">
                <ConsentField {...consent} />
              </div>

              <Button type="submit" isLarge>
                {submitLabel}
              </Button>
            </div>

            <p
              className="contact-form__status"
              role="status"
              data-form-status
              data-message={successMessage}
            ></p>
          </div>
        </form>
      </div>
    </section>
  )
}
