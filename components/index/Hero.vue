<script setup>
const colorMode = useColorMode();
const { locale } = useI18n();
</script>
<template>
  <section class="grid border-b-2 border-secondary md:grid-cols-3">
    <NuxtImg
      class="col-span-2 aspect-video border"
      :src="
        colorMode.value === 'dark'
          ? '/images/backgrounds/iris-bkg-dark.webp'
          : '/images/backgrounds/iris-bkg-light.webp'
      "
    />
    <div class="flex flex-col">
      <h1 class="border-r border-t p-4 font-serif text-6xl text-transparent bg-clip-text bg-gradient-to-r dark:from-purple-100 dark:via-blue-200 dark:to-amber-200 from-purple-900/70 via-blue-900 to-amber-900/40">
        {{ $t("top.title") }}
      </h1>
      <h2 class="border-b border-r border-t p-4 text-2xl text-muted-foreground">
        {{ $t("top.subheading") }}
      </h2>
      <div class="relative flex-grow overflow-hidden">
        <div
          class="pointer-events-none absolute inset-16 aspect-square -translate-x-2/3 -translate-y-2/3 rounded-full bg-gradient-to-bl from-purple-500/10 via-amber-300/40 to-blue-600/20 blur-2xl dark:via-black -z-50"
        ></div>
      </div>
      <NuxtLink
        class="flex h-fit items-center gap-2 border-b border-r border-t bg-blue-600 p-5 px-5 font-mono text-2xl text-white hover:underline"
        :to="`/${locale}/about`"
      >
        <Icon
          name="material-symbols:download-sharp"
          class="aspect-square text-3xl text-white"
        />
        <span class="hidden md:block">{{ $t("common.download") }}</span>
      </NuxtLink>
    </div>
  </section>
</template>
