<template>
  <div class="page-transition-container">
    <div
      class="page-transition bg-red-500"
      :class="{
        'page-transition-enter': isEntering,
        'page-transition-leave': isLeaving,
        'page-transition-initial': isInitial
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isEntering = ref(false)
const isLeaving = ref(false)
const isInitial = ref(true)

const startTransition = () => {
  isEntering.value = true
  setTimeout(() => {
    isEntering.value = false
    isLeaving.value = true
    setTimeout(() => {
      isLeaving.value = false
    }, 1000) // Durée de la sortie
  }, 300) // Durée de l'entrée
}

onMounted(() => {
  // Transition initiale
  startTransition()
  setTimeout(() => {
    isInitial.value = false
  }, 1300) // Durée totale de la transition initiale

  // Écouteurs pour les changements de route
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      startTransition()
    }
    next()
  })
})
</script>

<style scoped>
.page-transition-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.page-transition {
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  transform: translateX(0);
}

.page-transition-enter {
  animation: slideInFromRight 0.3s linear forwards;
}

.page-transition-leave {
  animation: slideOutToLeft 1s ease-out forwards;
}

.page-transition-initial {
  right: 0;
  animation: slideOutToLeft 1s ease-out forwards;
  animation-delay: 0.3s;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideOutToLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
