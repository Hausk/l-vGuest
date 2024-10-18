<template>
  <div
    v-if="loading"
    class="loading-overlay"
  >
    <div class="loading-background" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

router.beforeEach((to, from, next) => {
  loading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Assurez-vous que cela soit au-dessus des autres éléments */
}

.loading-background {
  background-color: red;
  width: 100%;
  height: 100vh;
}
</style>
