import { SocialLinks } from '@components'
import { contactGroups, contactInfo } from '@data'
import { ContactColumn } from './ContactColumn'
import { ContactLinks } from './ContactLinks'
import { ContactOffice } from './ContactOffice'
import './ContactInfo.css'

export function ContactInfo() {
  const { id, titleId, title } = contactInfo

  return (
    <section className="contact-info" id={id} aria-labelledby={titleId}>
      <h1 className="visually-hidden" id={titleId}>
        {title}
      </h1>

      <div className="contact-info__list container">
        {contactGroups.map(({ id: groupId, items }) => (
          <ul key={groupId} className="contact-info__group">
            {items.map((contact) => {
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
