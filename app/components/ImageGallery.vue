<template>
  <div class="columns-1 md:columns-2 lg:columns-3 text-white p-14">
    <div class="flex flex-col py-10">
      <p class="text-white text-4xl text-center mb-2">
        Bienvenue dans la gallerie <span class="text-red-500 uppercase font-bold">{{ props.infos.params.slug }}</span>
      </p>
      <p class="text-gray-300 text-lg text-center">
        Vous pouvez cliquer sur les images pour ouvrir la lightbox
      </p>
    </div>
    <div
      v-for="(image, index) in images"
      :key="index"
      class="relative cursor-pointer w-full h-full overflow-hidden rounded-md mb-5"
      @click="openLightbox(index)"
    >
      <LazyNuxtImg
        :src="image.url"
        :alt="'Image ' + index"
        class="w-full image"
      />
    </div>

    <LightBox
      v-if="isLightboxOpen"
      :images="images"
      :current-image="currentImage"
      @close="closeLightbox"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  infos: {
    type: Array,
    required: true
  }
})
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
const images = ref(
  randomSizes.map(size => ({
    url: `https://picsum.photos/${size.width}/${size.height}`
  }))
)

const isLightboxOpen = ref(false)
const currentImage = ref(0)

const openLightbox = (index: number) => {
  currentImage.value = index
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}
</script>

<style scoped>
.image {
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: .4s;
}
.image:hover {
  filter: brightness(1.2);
  transform: scale(1.05);
}
</style>
