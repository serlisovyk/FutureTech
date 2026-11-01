import { SocialLinks } from '@components'
import { contactInfo, contacts } from '@data'
import { ContactColumn } from './ContactColumn'
import { ContactLinks } from './ContactLinks'
import { ContactOffice } from './ContactOffice'
import './ContactInfo.css'

export function ContactInfo() {
  const { id, titleId, title } = contactInfo

  const groups = [contacts.slice(0, 2), contacts.slice(2)]

  return (
    <section className="contact-info" id={id} aria-labelledby={titleId}>
      <h1 className="visually-hidden" id={titleId}>
        {title}
      </h1>

      <div className="contact-info__list container">
        {groups.map((group) => (
          <ul key={group[0].id} className="contact-info__group">
            {group.map((contact) => {
              const {
                id: contactId,
                title: contactTitle,
                links,
                address,
                directions,
                socials,
              } = contact

              return (
                <li key={contactId} className="contact-info__item">
                  <ContactColumn title={contactTitle}>
                    {links && <ContactLinks links={links} />}

                    {address && (
                      <ContactOffice address={address} directions={directions} />
                    )}

                    {socials && <SocialLinks socials={socials} variant="boxed" />}
                  </ContactColumn>
                </li>
              )
            })}
          </ul>
        ))}
      </div>
    </section>
  )
}
