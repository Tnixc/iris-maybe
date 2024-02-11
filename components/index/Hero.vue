<script setup>
const colorMode = useColorMode();
const { locale } = useI18n();
</script>
<template>
  <section class="border-b-2 border-secondary md:grid md:grid-cols-3">
    <NuxtImg
      height="1440"
      width="2560"
      class="col-span-2 aspect-video border bg-amber-100 dark:bg-blue-950/40"
      :src="
        colorMode.value === 'dark'
          ? '/images/backgrounds/iris-bkg-dark.webp'
          : '/images/backgrounds/iris-bkg-light.webp'
      "
      alt="Screen with shaders"
    />
    <div class="flex flex-col">
      <div class="relative flex-grow overflow-hidden">
        <div
          class="pointer-events-none absolute inset-16 -z-50 aspect-square -translate-x-2/3 -translate-y-2/3 rounded-full bg-gradient-to-bl from-purple-500/10 via-amber-300/40 to-blue-600/20 blur-2xl dark:via-black"
        ></div>
      </div>
      <h1
        class="border-r border-t bg-gradient-to-r from-purple-900/70 via-blue-900 to-amber-900/40 bg-clip-text p-4 font-serif text-6xl text-transparent dark:from-purple-100 dark:via-blue-200 dark:to-amber-200"
      >
        {{ $t("index.title") }}
      </h1>
      <h2 class="border-b border-r border-t p-4 text-2xl text-muted-foreground">
        {{ $t("index.subheading") }}
      </h2>
      <NuxtLink
        class="border-tp-5 flex h-fit items-center gap-2 border-b border-r p-5 font-mono text-2xl text-white hover:underline"
        id="special"
        :to="`/${locale}/download`"
      >
        <Icon
          name="material-symbols:download-sharp"
          class="aspect-square text-3xl text-white"
        />
        <span class="">{{ $t("common.download") }}</span>
      </NuxtLink>
    </div>
  </section>
</template>
<style scoped>
#special {
  background-color: transparent; /* initial background color */
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    #2463EB 50% /*blue 600 */
  ); /* initial background image */
  background-attachment: fixed; /* fixed background */
  position: relative;
}
</style>
