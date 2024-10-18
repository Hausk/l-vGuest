<template>
  <div>
    <Suspense>
      <AnimatedSlider :categories="categories" />
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import type { Category } from '~~/server/types'

const { data: categories } = await useFetch<Category[]>('/api/categories/') as any
</script>
