import { Head } from 'minista/head'
import { UiKit } from '@sections'

export const metadata = { title: 'UI kit | FutureTech' }

export default function UiPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Every FutureTech UI component in each of its variants."
        />
        <meta name="robots" content="noindex" />
      </Head>
      <UiKit />
    </>
  )
}
