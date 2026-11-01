import { NotFoundIntro } from '@sections'
import { pages } from '@data'

export const metadata = pages.notFound

export default function NotFoundPage() {
  return <NotFoundIntro />
}
