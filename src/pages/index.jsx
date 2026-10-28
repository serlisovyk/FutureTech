import { site } from '@data/site.js'
import { Blogs, Features } from '@sections'

export const metadata = {
  description:
    'FutureTech is a blog about technology, the future of science and the people building it.',
}

export default function HomePage() {
  return (
    <>
      <h1>{site.name}</h1>
      <p>Home page placeholder.</p>
      <Features />
      <Blogs />
    </>
  )
}
