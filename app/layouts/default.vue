<template>
  <div class="bg-gray-950 overflow-x-hidden h-full w-full">
    <PageTransition />
    <HeaderComponent />
    <main class="mt-16">
      <slot />
    </main>
  </div>
</template>
