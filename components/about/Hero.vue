<script setup>
const colorMode = useColorMode();
const { locale } = useI18n();
</script>
<template>
  <section class="relative flex flex-col aspect-video md:aspect-[3/1] overflow-hidden border-b">
    <NuxtImg
      height="1440"
      width="2560"
      class="col-span-2 aspect-video border bg-amber-100 dark:bg-blue-950/40 absolute top-1/2 -translate-y-1/2 -z-40"
      :src="
        colorMode.value === 'dark'
          ? '/images/backgrounds/about-bkg-dark.webp'
          : '/images/backgrounds/about-bkg-light.webp'
      "
    />
    <div class="flex-grow"></div>
    <div class="relative z-10 p-10 bg-gradient-to-b from-background/50 to-background backdrop-blur-md border">
      <h1 class="text-5xl font-bold pb-2 bg-gradient-to-r from-purple-900/70 via-blue-900 to-amber-900/40 bg-clip-text text-transparent dark:from-purple-100 dark:via-blue-200 dark:to-amber-200">
        {{ $t('about.heading') }}
      </h1>
      <p class="text-xl text-muted-foreground ">
        {{ $t('about.subheading') }}
      </p>
    </div>
  </section>
</template>
