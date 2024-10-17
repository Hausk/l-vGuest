<template>
  <div>
    <AnimatedSlider :categories="categories" />
  </div>
</template>

<script lang="ts" setup>
import AnimatedSlider from '~/components/AnimatedSlider.vue'

const { data: categories } = await useFetch('/api/categories/') as any
</script>
