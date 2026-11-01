import { pages } from '@data'

export const metadata = pages.notFound

export default function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <p>This page does not exist.</p>
    </>
  )
}
