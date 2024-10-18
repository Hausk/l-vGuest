<template>
  <div class="bg-gray-950 overflow-x-hidden h-full w-full">
    <LoadingIndicator />
    <HeaderComponent />
    <main class="mt-16">
      <slot />
    </main>
  </div>
</template>
