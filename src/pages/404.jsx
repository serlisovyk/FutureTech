import { notFound, pages } from '@data'

export const metadata = pages.notFound

export default function NotFoundPage() {
  const { title, text } = notFound

  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  )
}
