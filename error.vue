<template>
  <NuxtLayout name="404">
    <Nav />
    <div class="grid place-items-center h-[80vh] relative">
      <h1 class="font-mono text-9xl font-bold
      text-transparent bg-clip-text bg-gradient-to-r from-purple-900/70 via-blue-900 to-amber-900/40 dark:from-purple-100 dark:via-blue-200 dark:to-amber-200
      ">404</h1>
      <NuxtImg src="/images/logos/iristrans.webp" class="aspect-square blur-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none dark:opacity-50 pointer-events-none" alt="iris logo" />
    </div>
    <Footer />
  </NuxtLayout>
</template>