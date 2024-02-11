<script setup>
const { locale } = useI18n();
</script>
<template>
  <Nav />
  <Container>
    <IndexHero />
    <IndexWhyUs />
    <IndexFeatures />
    <IndexAdvantage />
    <div class="flex gap-4 p-10">
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
    </div>
  </Container>
  <Footer />
</template>
