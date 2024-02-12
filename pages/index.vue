<script setup>
import i18n from "@/i18n.config.ts";
const { locale } = useI18n();
const t = i18n("index").messages[locale.value].index.title;
useHead({
  title: t,
});
</script>
<template>
  <Header />
  <Container>
    <IndexHero />
    <IndexWhyUs />
    <IndexFeatures />
    <IndexAdvantage />
    <div class="flex flex-wrap gap-4 p-10">
      <NuxtLink
        class="flex h-fit items-center gap-2 border bg-blue-600 p-5 font-mono text-2xl text-white hover:underline"
        :to="`/${locale}/download`"
      >
        <Icon
          name="material-symbols:download-sharp"
          class="aspect-square text-3xl text-white"
        />
        <span class="">{{ $t("common.download") }}</span>
      </NuxtLink>
      <NuxtLink
        class="flex h-fit items-center gap-2 border bg-accent p-5 px-10 font-mono text-2xl hover:underline"
        :to="`/${locale}/about`"
      >
        {{ $t("common.about") }}
        <Icon name="ph:arrow-right-bold" />
      </NuxtLink>
      <div class="flex-grow"></div>
      <div class="md:w-1/3">
        <h1 class="pb-2 text-3xl">{{ $t("common.footer1") }}</h1>
        <p class="text-muted-foreground">{{ $t("common.footerdesc1") }}</p>
      </div>
    </div>
  </Container>
  <Foot />
</template>
