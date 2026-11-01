import { Blogs, Features, Hero, Resources, Testimonials } from '@sections'
import { pages } from '@data'

export const metadata = pages.home

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
