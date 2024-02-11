<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value;
});
const currentLocale = computed(() => {
  return locales.value.find((i) => i.code === locale.value);
});
</script>

<template>
  <footer class="max-w-5xl w-full flex flex-wrap">
  <DropdownMenu>
    <DropdownMenuTrigger class="p-2 bg-accent">
      <Icon name="ph:translate" class="text-text aspect-square text-xl" />
      <span>{{ currentLocale.name }}</span></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem v-for="locale in availableLocales" :key="locale.code">
        <NuxtLink class="w-full" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</footer>
</template>
