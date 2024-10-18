<template>
  <div>
    <Suspense>
      <AnimatedSlider :categories="categories" />
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import type { Category } from '~~/server/types'

useHead({
  title: 'Libre & Vivant - Boite à Photos',
  meta: [
    { name: 'description', content: 'Photobox du site' }
  ]
})

const { data: categories } = await useFetch<Category[]>('/api/categories/') as any
</script>
