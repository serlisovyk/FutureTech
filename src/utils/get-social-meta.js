import { site } from '@data'
import { getAbsoluteUrl } from './get-absolute-url.js'

export function getSocialMeta(post) {
  if (post) {
    const photoUrls = import.meta.glob('/src/assets/images/photos/*.jpg', {
      eager: true,
      query: '?url',
      import: 'default',
    })

    return {
      type: 'article',
      image: { url: getAbsoluteUrl(photoUrls[post.image]), alt: post.imageAlt },
    }
  }

  const { src, width, height, alt } = site.socialImage

  return {
    type: 'website',
    image: { url: getAbsoluteUrl(src), width, height, alt },
  }
}
