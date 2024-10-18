<template>
  <div class="overflow-x-hidden w-screen min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Libre & Vivant',
  description: 'Site web de photographie'
})
useHead({
  title: 'Libre & Vivant',
  meta: [
    { name: 'description', content: 'Site web de photographie' }
  ]
})
</script>

<style>
html, :host {
  font-family: "Poppins", "sans-serif" !important;
}
.page-enter-active, .page-leave-active {
  transition: all 0.4s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
