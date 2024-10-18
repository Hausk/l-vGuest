<script lang="ts" setup>
import type { Image } from '~~/server/types'

const route = useRoute()
const { data: imagesList } = await useFetch<Image[]>(`/api/categories/${route.params.slug}`)
if (!imagesList.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>

<template>
  <div class="h-[calc(100vh-4rem)]">
    <ImageGallery
      :images="imagesList"
      :infos="route"
    />
  </div>
</template>
