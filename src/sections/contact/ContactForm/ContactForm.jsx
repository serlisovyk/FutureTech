import { Button, Heading, Icon } from '@components'
import { contactFields, contactForm } from '@data/contact-form.js'
import { ConsentField } from './ConsentField.jsx'
import { MessageField } from './MessageField.jsx'
import { PhoneField } from './PhoneField.jsx'
import { TextField } from './TextField.jsx'
import './ContactForm.css'

export function ContactForm() {
  const { id, titleId, icon, title, submitLabel, successMessage } = contactForm
  const { firstName, lastName, email, phone, message, consent } = contactFields

  return (
    <section className="contact-form" aria-labelledby={titleId}>
      <div className="contact-form__inner container">
        <div className="contact-form__intro">
          <Icon name={icon} className="contact-form__icon" />

          <Heading level={2} id={titleId} className="contact-form__title">
            {title}
          </Heading>
        </div>

        <form className="contact-form__form" id={id} method="post" data-contact-form>
          <div className="contact-form__row">
            <TextField
              id={firstName.id}
              errorId={firstName.errorId}
              name={firstName.name}
              label={firstName.label}
              placeholder={firstName.placeholder}
              autoComplete={firstName.autoComplete}
              errors={firstName.errors}
            />
            <TextField
              id={lastName.id}
              errorId={lastName.errorId}
              name={lastName.name}
              label={lastName.label}
              placeholder={lastName.placeholder}
              autoComplete={lastName.autoComplete}
              errors={lastName.errors}
            />
          </div>

          <div className="contact-form__row">
            <TextField
              id={email.id}
              errorId={email.errorId}
              name={email.name}
              label={email.label}
              placeholder={email.placeholder}
              autoComplete={email.autoComplete}
              errors={email.errors}
              pattern={email.pattern}
              type={email.type}
            />
            <PhoneField
              id={phone.id}
              errorId={phone.errorId}
              name={phone.name}
              label={phone.label}
              placeholder={phone.placeholder}
              autoComplete={phone.autoComplete}
              countryName={phone.countryName}
              countryLabel={phone.countryLabel}
              digitsError={phone.digitsError}
              errors={phone.errors}
            />
          </div>

          <MessageField
            id={message.id}
            errorId={message.errorId}
            name={message.name}
            label={message.label}
            placeholder={message.placeholder}
            errors={message.errors}
          />

          <div className="contact-form__actions">
            <div className="contact-form__footer">
              <div className="contact-form__consent">
                <ConsentField
                  id={consent.id}
                  errorId={consent.errorId}
                  name={consent.name}
                  label={consent.label}
                  errors={consent.errors}
                />
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
