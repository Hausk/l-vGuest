export interface Image {
  id: number
  path: string
  uploadedAt: Date
  categoryId: number
}

export interface Category {
  id: number
  name: string
  slug: string
  createdAt: string
  pinnedImageId: number | null
  pinnedImage: Image
}

export interface RouteInfo {
  params: {
    slug: string
  }
}
