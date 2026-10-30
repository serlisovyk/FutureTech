import { ContactForm, ContactInfo, Faq } from '@sections'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with the FutureTech team: ask a question, send feedback or suggest a story.',
}

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <Faq />
    </>
  )
}
