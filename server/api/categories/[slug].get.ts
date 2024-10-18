import { eq } from 'drizzle-orm'
import { db } from '~~/server/db'
import { categories, images } from '~~/server/database/schema'

export default eventHandler(async (event: any) => {
  const slug: string = event.context.params?.slug

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug is required' })
  }

  const category = await db.query.categories.findFirst({
    where: eq(categories.slug, slug)
  })

  if (!category) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }

  const categoryImages = await db.query.images.findMany({
    where: eq(images.categoryId, category.id)
  })

  return categoryImages
})
