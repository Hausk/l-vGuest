import { db } from '~~/server/db'

export default eventHandler(async () => {
  // List categories for the current user
  const categories = await db.query.categories.findMany({
    with: {
      pinnedImage: {
        columns: {
          path: true
        }
      }
    }
  })
  return categories
})
