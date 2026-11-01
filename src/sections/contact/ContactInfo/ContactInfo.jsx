import { contactInfo, contacts } from '@data'
import { ContactColumn } from './ContactColumn.jsx'
import './ContactInfo.css'

export function ContactInfo() {
  const groups = [contacts.slice(0, 2), contacts.slice(2)]

  return (
    <section
      className="contact-info"
      id={contactInfo.id}
      aria-labelledby={contactInfo.titleId}
    >
      <h1 className="visually-hidden" id={contactInfo.titleId}>
        {contactInfo.title}
      </h1>

      <div className="contact-info__list container">
        {groups.map((group) => (
          <ul key={group[0].id} className="contact-info__group">
            {group.map((contact) => {
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
        ))}
      </div>
    </section>
  )
}
