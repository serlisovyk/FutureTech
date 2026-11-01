import { site } from '@data'
import { getAbsoluteUrl } from './get-absolute-url.js'

export function getSocialMeta(post) {
  if (post) {
    const { image: postImage, imageAlt } = post

    const photoUrls = import.meta.glob('/src/assets/images/photos/*.jpg', {
      eager: true,
      query: '?url',
      import: 'default',
    })

    return {
      type: 'article',
      image: { url: getAbsoluteUrl(photoUrls[postImage]), alt: imageAlt },
    }
  }

  const {
    socialImage: { src, width, height, alt },
  } = site

  return {
    type: 'website',
    image: { url: getAbsoluteUrl(src), width, height, alt },
  }
}
