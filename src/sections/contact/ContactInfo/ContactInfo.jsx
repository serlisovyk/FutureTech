import { contactInfo, contacts } from '@data/contacts.js'
import { ContactColumn } from './ContactColumn.jsx'
import './ContactInfo.css'

export function ContactInfo() {
  return (
    <section
      className="contact-info"
      id={contactInfo.id}
      aria-labelledby={contactInfo.titleId}
    >
      <h1 className="visually-hidden" id={contactInfo.titleId}>
        {contactInfo.title}
      </h1>

      <ul className="contact-info__list container">
        {contacts.map((contact) => {
          const { id, title, links, address, directions, socials } = contact

          return (
            <li key={id} className="contact-info__item">
              <ContactColumn
                title={title}
                links={links}
                address={address}
                directions={directions}
                socials={socials}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
