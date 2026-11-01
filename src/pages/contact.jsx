import { ContactForm, ContactInfo, Faq } from '@sections'
import { pages } from '@data'

export const metadata = pages.contact

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <Faq />
    </>
  )
}
