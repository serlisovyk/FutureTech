import { Head } from 'minista/head'
import { getSocialMeta } from '@utils'
import { site } from '@data'
import { ArticleMeta } from '@components/head/ArticleMeta'

export function SocialMeta(props) {
  const { title, description, canonicalUrl, post } = props

  const { name: siteName, locale } = site

  const socialTitle = title || siteName

  const {
    type,
    image: { url: imageUrl, width: imageWidth, height: imageHeight, alt: imageAlt },
  } = getSocialMeta(post)

  return (
    <>
      <Head>
        <meta property="og:site_name" content={siteName} />

        <meta property="og:locale" content={locale} />

        <meta property="og:type" content={type} />

        <meta property="og:title" content={socialTitle} />

        <meta property="og:description" content={description} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={imageUrl} />

        {imageWidth && <meta property="og:image:width" content={imageWidth} />}

        {imageHeight && <meta property="og:image:height" content={imageHeight} />}

        <meta property="og:image:alt" content={imageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {post && <ArticleMeta post={post} />}
    </>
  )
}
