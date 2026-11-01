import { Head } from 'minista/head'
import {
  getArticleJsonLd,
  getOrganizationJsonLd,
  getSocialMeta,
  serializeJsonLd,
} from '@utils'

export function JsonLd(props) {
  const { canonicalUrl, post } = props

  const {
    image: { url: imageUrl },
  } = getSocialMeta(post)

  const organizationJsonLd = serializeJsonLd(getOrganizationJsonLd())

  const articleJsonLd =
    post && serializeJsonLd(getArticleJsonLd(post, canonicalUrl, imageUrl))

  return (
    <Head>
      <script type="application/ld+json">{organizationJsonLd}</script>

      {post && <script type="application/ld+json">{articleJsonLd}</script>}
    </Head>
  )
}
