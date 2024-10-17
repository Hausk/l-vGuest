<template>
  <div>
    <AnimatedSlider :categories="categories" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AnimatedSlider from '~/components/AnimatedSlider.vue'

const categories = ref([
  { id: 1, name: 'Nature', slug: 'nature', createdAt: '2023-05-01', pinnedImageUrl: 'https://images.unsplash.com/1/type-away.jpg' },
  { id: 2, name: 'City', slug: 'city', createdAt: '2023-05-02', pinnedImageUrl: 'https://images.unsplash.com/1/type-away.jpg' },
  { id: 3, name: 'People', slug: 'people', createdAt: '2023-05-03', pinnedImageUrl: 'https://images.unsplash.com/1/type-away.jpg' },
  { id: 4, name: 'Technology', slug: 'technology', createdAt: '2023-05-04', pinnedImageUrl: 'https://images.unsplash.com/1/type-away.jpg' },
  { id: 5, name: 'Animals', slug: 'animals', createdAt: '2023-05-05', pinnedImageUrl: 'https://images.unsplash.com/1/type-away.jpg' }
])
</script>
