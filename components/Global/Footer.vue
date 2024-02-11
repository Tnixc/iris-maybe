<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const currentLocale = computed(() => {
  return locales.value.find((i) => i.code === locale.value);
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Icon name="ph:translate" class="text-text aspect-square text-xl" />
      <span>{{ currentLocale.name }}</span></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem v-for="locale in availableLocales" :key="locale.code">
        <NuxtLink class="items flex" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </NuxtLink>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
