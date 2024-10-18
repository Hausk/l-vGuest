<template>
  <div
    class="fixed inset-0 flex items-center bg-black bg-opacity-100 lg:bg-opacity-95 z-40 ring-1 ring-red-500 ring-inset"
    @click.self="close"
  >
    <swiper
      :modules="[Navigation, Keyboard]"
      :slides-per-view="1"
      :keyboard="{ enabled: true }"
      :initial-slide="currentImage"
      :lazy="true"
      :preload-images="false"
      :loop="true"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="flex items-center justify-center px-12"
      >
        <NuxtImg
          ref="currentImageRef"
          :src="image.path"
          :alt="'Image n' + index"
          class="max-h-[90vh] w-full lg:w-auto object-contain cursor-none rounded-md"
          loading="lazy"
        />
      </swiper-slide>
    </swiper>

    <button
      class="absolute top-5 right-5 lg:right-10 text-white cursor-pointer z-50"
      @click="close()"
    >
      <X
        :size="42"
        class="text-red-500"
      />
    </button>
    <button
      ref="prevButton"
      class="absolute z-50 top-1/2 left-0 lg:left-10 -translate-y-1/2 opacity-0"
      @click="prevSlide()"
    >
      <ChevronLeft :size="48" />
    </button>
    <button
      ref="nextButton"
      class="absolute z-50 top-1/2 -translate-y-1/2 right-0 lg:right-10 opacity-0"
      @click="nextSlide()"
    >
      <ChevronRight :size="48" />
    </button>
    <p class="absolute bottom-5 right-10 text-xl">
      {{ currentIndex + 1 }} | {{ maxIndex }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Keyboard } from 'swiper/modules'
import { onKeyStroke } from '@vueuse/core'
import 'swiper/css'
import 'swiper/css/navigation'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import gsap from 'gsap'
import type { Image } from '~~/server/types'

const props = defineProps<{
  images: Image[]
  currentImage: number
}>()

const emit = defineEmits(['close'])
const close = () => emit('close')

const swiperInstance = ref(null)
const showLightbox = ref(true)

const currentIndex = ref(props.currentImage)
const maxIndex = ref(props.images.length)

const prevButton = ref(null)
const nextButton = ref(null)
const currentImageRef = ref(null)

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
  // Aller à l'image actuelle au montage
  swiper.slideTo(props.currentImage, 0)
}

const onSlideChange = () => {
  if (swiperInstance.value) {
    currentIndex.value = swiperInstance.value.realIndex
  }
}

// Navigation clavier
onKeyStroke('ArrowRight', () => {
  if (showLightbox.value && swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
})

onKeyStroke('ArrowLeft', () => {
  if (showLightbox.value && swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
})

const prevSlide = () => {
  swiperInstance.value.slidePrev()
}
const nextSlide = () => {
  swiperInstance.value.slideNext()
}

// Fermeture avec la touche Escape
onKeyStroke('Escape', () => {
  close()
})

onMounted(() => {
  // Animation de l'image (bordure morphique)
  gsap.fromTo(currentImageRef.value,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }
  )

  // Animation initiale des boutons
  gsap.to([prevButton.value, nextButton.value], {
    x: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.2
  })

  // Animation de rebond continue des boutons
  gsap.to(prevButton.value, {
    x: '+=5',
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })

  gsap.to(nextButton.value, {
    x: '-=5',
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
})
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Optimisation des transitions */
.swiper-slide img {
  transition: opacity 0.3s ease;
}

.swiper-slide-active img {
  opacity: 1;
}

.swiper-slide:not(.swiper-slide-active) img {
  opacity: 0;
}
.swiper-slide img {
  transition: opacity 0.3s ease;
}
</style>
