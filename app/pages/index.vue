<template>
  <section class="h-[calc(100vh-4rem)] flex">
    <div class="w-[80%] m-auto h-fit">
      <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div class="text-center xl:text-left order-2 xl:order-none">
          <span class="text-xl bg-red-500 text-black px-5 py-2 border-red-500 rounded-md hidden xl:block w-fit">Photographe</span>
          <div class="overflow-hidden py-2">
            <h1
              class="text-4xl lg:text-[80px] xl:h1 text-white xl:font-semibold xl:leading-[1.1] transition-transform duration-500"
            >
              Bonjour, je suis
            </h1>
          </div>
          <div class="overflow-hidden pb-2">
            <span
              class="text-red-500 font-bold text-4xl xl:text-[80px] xl:font-semibold xl:leading-[1.1] transition-transform duration-500"
            >
              Victoria
            </span>
          </div>
          <p class="max-w-[500px] mb-9 text-white/80 text-justify">
            Photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables
          </p>
          <div class="flex flex-col xl:flex-row items-center gap-8">
            <a
              class="justify-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-11 rounded-md px-8 uppercase flex items-center gap-2 bg-primary border border-red-500 text-accent text-base hover:bg-red-500 hover:text-black text-white/80"
              href="mailto:victoriadossantos92190@gmail.com"
            >Me contacter<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail text-xl my-auto align-middle"
            ><rect
              width="20"
              height="16"
              x="2"
              y="4"
              rx="2"
            /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></a><div class="mb-8 xl:mb-0">
              <div class="flex gap-6">
                <a
                  class="w-9 h-9 border border-red-500 rounded-full flex justify-center items-center text-accent text-base hover:bg-red-500 hover:text-black hover:transition-all duration-500 text-white/80"
                  target="_blank"
                  href="https://m.facebook.com/profile.php?id=100072519471892"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg></a><a
                  class="w-9 h-9 border border-red-500 rounded-full flex justify-center items-center text-accent text-base hover:bg-red-500 hover:text-black hover:transition-all duration-500 text-white/80"
                  target="_blank"
                  href="https://www.instagram.com/libre_vivant_photographie/?igshid=YmMyMTA2M2Y%3Dm"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a><a
                  class="w-9 h-9 border border-red-500 rounded-full flex justify-center items-center text-accent text-base hover:bg-red-500 hover:text-black hover:transition-all duration-500 text-white/80"
                  target="_blank"
                  href="https://www.tiktok.com/@libre_vivant"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg></a>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1">
          <div class="relative h-full w-full">
            <div class="w-[70vw] h-[70vw] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative top-0 opacity-100">
              <img
                src="/header.png"
                alt="Vitória"
                class="rounded-full object-contain absolute top-0 inset-0 w-full h-full"
              >
            </div>
            <svg
              class="absolute inset-0 w-[70vw] h-[70vw] xl:w-[498px] xl:h-[498px] top-0 circle-animation"
              viewBox="0 0 320 320"
            >
              <path
                ref="circle"
                fill="none"
                stroke="#ef4444"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const circle = ref(null)

    onMounted(() => {
      const animate = () => {
        const points = 200
        const radius = 150 // Rayon légèrement plus petit que le rayon de l'image
        const centerX = 160
        const centerY = 160
        let path = `M${centerX + radius},${centerY}`

        // Variation en fonction du temps pour rendre le mouvement plus organique
        for (let i = 1; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2
          const timeVariation = Math.sin(Date.now() / 500 + i) * 2 // Variation liée au temps
          const radiusVariation = Math.cos(Date.now() / 150 + i) * 2 // Légère variation de taille
          const x = centerX + Math.cos(angle) * (radius + timeVariation + radiusVariation)
          const y = centerY + Math.sin(angle) * (radius + timeVariation + radiusVariation)
          path += ` L${x},${y}`
        }

        path += 'Z'

        if (circle.value) {
          circle.value.setAttribute('d', path)
        }

        requestAnimationFrame(animate)
      }

      animate()
    })

    return {
      circle
    }
  }
}
</script>

<style scoped>
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.circle-animation {
  animation: rotate 20s linear infinite, pulse 3s ease-in-out infinite;
}
</style>
