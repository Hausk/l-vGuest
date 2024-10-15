<template>
  <header class="fixed top-0 w-screen py-4 text-white z-30 bg-black" style="">
    <div class="mx-auto flex justify-between items-center px-10 lg:px-0 lg:w-[80%]">
      <NuxtLink to="/">
        <h1 class="text-2xl md:text-4xl font-semibold group hover:text-red-500 duration-200">
          Libre&nbsp;
          <span class="text-red-500 group-hover:text-white">&amp;</span>
          &nbsp;Vivant<span class="text-red-500 group-hover:text-white">.</span>
        </h1>
      </NuxtLink>
      <div class="hidden xl:flex items-center gap-8">
        <nav class="flex gap-8">
          <NuxtLink class="text-red-500 border-b-2 border-red-500 capitalize font-medium hover:text-red-500 transition-all" to="/">accueil</NuxtLink>
          <NuxtLink class="false capitalize font-medium hover:text-red-500 transition-all" to="/photobox">photobox</NuxtLink>
        </nav>
      </div>
      <div class="xl:hidden">
        <button class="flex justify-center items-center" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R3ba:" data-state="closed">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu text-[32px] text-red-500">
            <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18">
            </line>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>