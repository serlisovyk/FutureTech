import { socials } from './socials.js'

export const contactInfo = {
  id: 'contact-info',
  titleId: 'contact-info-title',
  title: 'Contact FutureTech',
}

export const contacts = [
  {
    id: 'general-inquiries',
    title: 'General Inquiries',
    links: [
      { label: 'contact@ai-podcasts.com', href: 'mailto:contact@ai-podcasts.com' },
      { label: '+1 (123) 456-7890', href: 'tel:+11234567890' },
    ],
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    links: [
      { label: 'support@ai-podcasts.com', href: 'mailto:support@ai-podcasts.com' },
      { label: '+1 (123) 456-7891', href: 'tel:+11234567891' },
    ],
  },
  {
    id: 'our-office',
    title: 'Our Office',
    address: 'Address: 123 AI Tech Avenue, Techville, 54321',
    directions: {
      label: 'Get Directions',
      href: 'https://www.google.com/maps/search/?api=1&query=123+AI+Tech+Avenue+Techville+54321',
    },
  },
  {
    id: 'connect-with-us',
    title: 'Connect with Us',
    socials,
  },
]
