<script lang="ts" setup>
const route = useRoute()
const { data: imagesList } = await useFetch(`/api/categories/${route.params.slug}`)
if (!imagesList.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
const randomSizes = [
  { width: 300, height: 200 },
  { width: 400, height: 300 },
  { width: 250, height: 250 },
  { width: 350, height: 250 },
  { width: 450, height: 300 },
  { width: 300, height: 200 },
  { width: 400, height: 300 },
  { width: 250, height: 250 },
  { width: 350, height: 250 },
  { width: 450, height: 300 }
]
const unsplashImages = ref(
  randomSizes.map(size => ({
    url: `https://picsum.photos/${size.width}/${size.height}`,
    width: size.width,
    height: size.height
  }))
)
</script>

<template>
  <div class="h-[calc(100vh-4rem)]">
    <ImageGallery
      :images="unsplashImages"
      :infos="route"
    />
  </div>
</template>
