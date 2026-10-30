import { site } from '@data/site.js'
import { getAbsoluteUrl } from './get-absolute-url.js'

const photoUrls = import.meta.glob('/src/assets/images/photos/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getSocialMeta(post) {
  if (post) {
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
