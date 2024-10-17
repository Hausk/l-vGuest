<script setup>
import { Parallax } from 'swiper/modules'
import { onMounted, ref } from 'vue'
import { useScroll } from '@vueuse/core'
import gsap from 'gsap'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const swiperRef = ref(null)
const imgRefs = ref([])
const textRefs = ref([])

// Animation passive pour l'img (effet de drapeau)
const animateFlag = (img) => {
  gsap.to(img, {
    duration: 2,
    y: '+=10',
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })
}

// Animation passive pour le texte
const animateText = (text) => {
  gsap.to(text, {
    duration: 4,
    x: '+=100',
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })
}

// Animation au défilement
const { y } = useScroll(window)
const handleScroll = () => {
  const scrollY = y.value
  imgRefs.value.forEach((img, index) => {
    gsap.to(img, {
      y: scrollY * 0.05 * (index + 1),
      duration: 0.5,
      ease: 'power1.out'
    })
  })
  textRefs.value.forEach((text, index) => {
    gsap.to(text, {
      y: scrollY * 0.05 * (index + 1),
      x: scrollX * 0.10 * (index + 1),
      duration: 0.5,
      ease: 'power1.out'
    })
  })
}
imgRefs.value.forEach(animateFlag)
onMounted(() => {
  imgRefs.value.forEach(animateFlag)
  textRefs.value.forEach(animateText)
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="h-[calc(100vh-4rem)] w-screen overflow-hidden flex">
    <div class="my-auto w-full mx-auto h-full">
      <Swiper
        ref="swiperRef"
        class="h-full"
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
        :modules="[SwiperAutoplay, Parallax]"
        :loop="true"
        :parallax="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true
        }"
      >
        <SwiperSlide
          v-for="(category, idx) in props.categories"
          :key="idx"
          class="flex relative"
        >
          <div class="m-auto relative">
            <LazyNuxtImg
              :ref="el => { if (el) imgRefs[idx] = el }"
              :src="category.pinnedImageUrl"
              class="rounded-lg border-1 border-dashed border-red-500"
            />
            <p
              :ref="el => { if (el) textRefs[idx] = el }"
              class="absolute z-10 bottom-10 left-10 text-white text-xl text-bold"
            >
              {{ category.name }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper-slide {
    display: flex;
}

.swiper-slide p {
    transition: .3s linear;
    opacity: 0;
}

.swiper-slide-active p {
    opacity: 1;
}
</style>
