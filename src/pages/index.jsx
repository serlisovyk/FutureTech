import { Blogs, Features, Hero, Resources, Testimonials } from '@sections'

export const metadata = {
  description:
    'FutureTech is a blog about technology, the future of science and the people building it.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Blogs />
      <Resources />
      <Testimonials />
    </>
  )
}
