<template>
  <div class="h-[calc(100vh-4rem)] w-screen overflow-hidden flex">
    <div class="my-auto w-full mx-auto h-full flex">
      <Swiper
        ref="swiperRef"
        class="h-full w-[80%] md:h-auto lg:w-full my-auto"
        :centered-slides="true"
        :speed="600"
        :slides-per-view="2"
        :breakpoints="{
          0: {
            direction: 'vertical',
            spaceBetween: 40
          },
          580: {
            spaceBetween: 40,
            direction: 'horizontal'
          },
          1024: {
            spaceBetween: 100,
            direction: 'horizontal'
          }
        }"
        :modules="[Parallax, Keyboard, Mousewheel]"
        :loop="true"
        :parallax="true"
        :keyboard="{ enabled: true }"
        :mousewheel="true"
        @slide-change="handleSlideChange"
      >
        <SwiperSlide
          v-for="(category, idx) in props.categories"
          :key="idx"
          class="flex relative h-full w-full"
        >
          <div class="m-auto relative perspective-container h-full w-[80%]">
            <div
              :ref="el => { if (el) imgContainerRefs[idx] = el }"
              class="image-container lg:overflow-hidden rounded-lg h-full w-full"
            >
              <NuxtLink
                class="overflow-hidden rounded-lg h-full w-full"
                :to="'photobox/' + category.slug"
              >
                <NuxtImg
                  :ref="el => { if (el) imgRefs[idx] = el }"
                  loading="lazy"
                  :src="category.pinnedImage.path"
                  class="rounded-lg border-1 border-dashed border-red-500 aspect-square object-cover w-full h-full"
                />
              </NuxtLink>
            </div>
            <p
              :ref="el => { if (el) textRefs[idx] = el }"
              class="absolute z-10 bottom-5 left-5 lg:bottom-10 lg:left-10 text-white text-xl font-bold category-text"
            >
              {{ category.name }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Keyboard, Parallax, Mousewheel } from 'swiper/modules'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useScroll } from '@vueuse/core'
import gsap from 'gsap'
import type { Category } from '~~/server/types'

const props = defineProps<{
  categories: Category[]
}>()

const swiperRef = ref(null)
const imgRefs = ref([])
const imgContainerRefs = ref([])
const textRefs = ref([])
const currentAnimation = ref(null)

const resetSlides = () => {
  const allSlides = document.querySelectorAll('.swiper-slide')
  allSlides.forEach((slide) => {
    const container = slide.querySelector('.image-container')
    const text = slide.querySelector('.category-text')
    if (container && text) {
      gsap.set([container, text], {
        clearProps: 'all'
      })
    }
  })
}

const animateActiveSlide = (container, text) => {
  if (currentAnimation.value) {
    currentAnimation.value.kill()
  }

  resetSlides()

  const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: 'power2.inOut' }
  })

  // Phase 1: Zoom in + text monte légèrement
  tl.to([container, text], {
    scale: 1.1,
    y: (index, target) => target.classList.contains('category-text') ? -20 : 0,
    duration: 2.5,
    ease: 'back.out(1.7)'
  })

  // Phase 2: Rotation gauche + text suit le mouvement
    .to([container, text], {
      rotate: -2,
      scale: 1.02,
      x: (index, target) => target.classList.contains('category-text') ? -10 : 0,
      duration: 2,
      ease: 'bounce.out'
    })

  // Phase 3: Rotation droite + text suit le mouvement
    .to([container, text], {
      rotate: 2,
      x: (index, target) => target.classList.contains('category-text') ? 10 : 0,
      duration: 2,
      ease: 'bounce.out'
    })

  // Phase 4: Retour à la position initiale
    .to([container, text], {
      rotate: 0,
      scale: 1,
      x: 0,
      y: 0,
      duration: 2.5,
      ease: 'back.in(1.7)'
    })

  currentAnimation.value = tl
  return tl
}

const handleSlideChange = () => {
  resetSlides()

  setTimeout(() => {
    const activeSlide = document.querySelector('.swiper-slide-active')
    if (activeSlide) {
      const container = activeSlide.querySelector('.image-container')
      const text = activeSlide.querySelector('.category-text')
      if (container && text) {
        animateActiveSlide(container, text)
      }
    }
  }, 0)
}

const { y } = useScroll(window)
const handleScroll = () => {
  const scrollY = y.value
  const activeSlide = document.querySelector('.swiper-slide-active')
  if (activeSlide) {
    const text = activeSlide.querySelector('.category-text')
    const container = activeSlide.querySelector('.image-container')
    if (text && container) {
      gsap.to([container, text], {
        y: scrollY * 0.05,
        duration: 0.5,
        ease: 'power1.out'
      })
    }
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  handleSlideChange()
})

onBeforeUnmount(() => {
  if (currentAnimation.value) {
    currentAnimation.value.kill()
  }
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.swiper-slide {
    display: flex;
}

.perspective-container {
    perspective: 1000px;
}

.swiper-slide p {
    transition: opacity 0.3s linear;
    opacity: 0;
}

.swiper-slide-active p {
    opacity: 1;
}

.image-container {
    transform-origin: center center;
    will-change: transform;
    height: 100%;
    width: 100%;
}

.category-text {
    transform-origin: center center;
    will-change: transform;
}

.swiper-slide-active .image-container:hover {
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.swiper-slide-active .image-container:hover img {
    transform: scale(1.1);
}

.swiper-slide-active img {
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
}
.swiper {
  overflow: inherit !important;
}
</style>
