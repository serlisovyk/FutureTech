import { Head } from "minista/head"

export const metadata = { title: "Page not found | FutureTech" }

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The page you are looking for does not exist on FutureTech."
        />
      </Head>
      <h1>Page not found</h1>
      <p>This page does not exist.</p>
    </>
  )
}
