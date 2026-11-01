export function getNewsCardProps(post) {
  const {
    slug,
    title,
    category,
    image,
    imageAlt,
    counters: { likes, comments },
  } = post

  return { slug, title, category, image, imageAlt, likes, comments }
}
