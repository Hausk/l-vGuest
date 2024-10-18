<script lang="ts" setup>
import type { NuxtError } from '#app'

useSeoMeta({
  title: 'Libre & Vivant | Page Introuvable',
  description: 'Désolé, la page est introuvable.'
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>

<template>
  <div class="w-screen h-screen flex bg-black">
    <UContainer class="m-auto">
      <div class="min-h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center">
        <p class="text-base font-semibold text-primary">
          {{ error.statusCode }}
        </p>
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-5xl text-nowrap">
          La page est introuvable
        </h2>
        <p class="mt-6 text-base/7 text-gray-500 dark:text-gray-400 text-center">
          Cette page n'est pas celle que tu recherches
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink
            class="m-auto text-white bg-red-500 rounded-lg px-4 py-2 hover:bg-transparent hover:text-red-500 border border-red-500 duration-300"
            to="/"
          >
            Revenir à l'accueil
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>
