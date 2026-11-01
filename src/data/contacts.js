import { socials } from './socials.js'

export const contactInfo = {
  id: 'contact-info',
  titleId: 'contact-info-title',
  title: 'Contact FutureTech',
}

const contacts = [
  {
    id: 'general-inquiries',
    title: 'General Inquiries',
    links: [
      {
        label: 'contact@futuretech.example',
        href: 'mailto:contact@futuretech.example',
      },
      { label: '+1 (555) 010-0123', href: 'tel:+15550100123' },
    ],
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    links: [
      {
        label: 'support@futuretech.example',
        href: 'mailto:support@futuretech.example',
      },
      { label: '+1 (555) 010-0124', href: 'tel:+15550100124' },
    ],
  },
  {
    id: 'our-office',
    title: 'Our Office',
    address: 'Address: 123 FutureTech Avenue, Techville, 54321',
    directions: {
      label: 'Get Directions',
      href: 'https://www.google.com/maps/search/?api=1&query=123+FutureTech+Avenue+Techville+54321',
    },
  },
  {
    id: 'connect-with-us',
    title: 'Connect with Us',
    socials,
  },
]

const [generalInquiries, technicalSupport, ourOffice, connectWithUs] = contacts

export const contactGroups = [
  { id: 'reach-us', items: [generalInquiries, technicalSupport] },
  { id: 'find-us', items: [ourOffice, connectWithUs] },
]
