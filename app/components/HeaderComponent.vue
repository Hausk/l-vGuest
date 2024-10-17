<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Home, Camera, Info } from 'lucide-vue-next'

const route = useRoute()
const isDrawerOpen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

const navItems = [
  { name: 'Accueil', path: '/', icon: Home },
  { name: 'Photobox', path: '/photobox', icon: Camera },
  { name: 'Contact', path: '/contact', icon: Info }
]
</script>

<template>
  <header class="fixed top-0 w-screen py-4 text-white z-30 bg-black">
    <div class="mx-auto flex justify-between items-center px-4 lg:px-10 xl:px-0 xl:w-[80%]">
      <NuxtLink
        to="/"
        @click="closeDrawer"
      >
        <h1 class="text-2xl md:text-4xl font-semibold group hover:text-red-500 duration-200">
          Libre&nbsp;
          <span class="text-red-500 group-hover:text-white">&amp;</span>
          &nbsp;Vivant<span class="text-red-500 group-hover:text-white">.</span>
        </h1>
      </NuxtLink>
      <div class="hidden xl:flex items-center gap-8">
        <nav class="flex gap-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="capitalize font-medium hover:text-red-500 transition-all"
            :class="route.path == item.path ? 'text-red-500 border-b-2 border-red-500' : ''"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
      <div class="xl:hidden">
        <button
          class="flex justify-center items-center text-red-500 transition-all duration-300 ease-in-out relative w-8 h-8"
          type="button"
          @click="toggleDrawer"
        >
          <Menu
            :class="[
              'absolute transition-all duration-300 ease-in-out',
              isDrawerOpen ? 'opacity-0 rotate-180 blur-sm' : 'opacity-100 rotate-0 blur-0'
            ]"
            size="32"
          />
          <X
            :class="[
              'absolute transition-all duration-300 ease-in-out',
              isDrawerOpen ? 'opacity-100 -rotate-0 blur-0' : 'opacity-0 -rotate-180 blur-sm'
            ]"
            size="32"
          />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div
    v-if="isDrawerOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-10 xl:hidden"
    @click="closeDrawer"
  />
  <div
    :class="[
      'fixed right-0 top-16 h-[calc(100vh-4rem)] w-full bg-black text-white z-20 transform transition-all duration-500 ease-in-out overflow-y-auto border-l border-red-500',
      isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <div class="p-6 flex flex-col h-full">
      <h2 class="text-3xl font-bold mb-8 text-red-500 text-center">
        Navigation
      </h2>
      <nav class="flex-grow">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="py-4 px-4 my-2 text-2xl capitalize font-medium hover:bg-red-500 hover:text-white transition-all rounded-lg flex items-center"
          :class="route.path == item.path ? 'bg-red-500 text-white' : ''"
          @click="closeDrawer"
        >
          <component
            :is="item.icon"
            class="mr-4"
            size="28"
          />
          {{ item.name }}
        </NuxtLink>
      </nav>
      <div class="mt-auto pt-8 border-t border-gray-800">
        <p class="text-sm text-gray-500 text-center">
          &copy; 2024 Libre & Vivant. Tous droits réservés.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blur-sm {
  filter: blur(5px);
}

.blur-0 {
  filter: blur(0);
}
</style>
