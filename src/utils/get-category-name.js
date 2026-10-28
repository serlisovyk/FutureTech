import { blogCategories, newsCategories } from '@data/categories.js'

export function getCategoryName(slug) {
  const category = [...blogCategories, ...newsCategories].find(
    (item) => item.slug === slug,
  )

  return category.name
}
