import { ContactInfo, Faq } from '@sections'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the FutureTech team.',
}

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <Faq />
    </>
  )
}
