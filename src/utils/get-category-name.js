import { blogCategories, newsCategories } from '@data/categories.js'

const categories = [...blogCategories, ...newsCategories]

export function getCategoryName(slug) {
  const category = categories.find((item) => item.slug === slug)

  return category.name
}
