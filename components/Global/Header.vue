<script setup>
const colorMode = useColorMode();
const { locale } = useI18n();
function setTheme(theme) {
  colorMode.preference = theme;
  colorMode.value = theme;
}
</script>
<template>
  <div class="fixed left-0 right-0 top-0 z-50 flex justify-center">
    <div
      class="flex w-full max-w-7xl items-center bg-secondary/70 backdrop-blur-lg"
    >
      <NuxtLink
        class="flex items-center gap-2 bg-secondary p-1"
        :to="`/${locale}/`"
      >
        <NuxtImg placeholder sizes="100vw sm:50vw md:100vw"  
          src="/images/logos/iristrans.webp"
          width="42"
          height="42"
          alt="iris logo"
        />
        <h1 class="pr-2 font-mono md:text-2xl">IRIS SHADERS</h1>
      </NuxtLink>
      <div class="flex-grow"></div>
      <NuxtLink
        class="flex h-full items-center px-5 text-right font-mono hover:bg-accent hover:underline md:text-lg"
        :to="`/${locale}/about`"
        >{{ $t("common.about") }}</NuxtLink
      >
      <NuxtLink
        class="flex h-full items-center gap-2 bg-blue-600 px-5 font-mono text-lg text-white hover:underline"
        :to="`/${locale}/download`"
      >
        <Icon
          name="material-symbols:download-sharp"
          class="aspect-square text-xl text-white"
        />
        <span class="hidden md:block">{{ $t("common.download") }}</span>
      </NuxtLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          class="flex h-full select-none items-center gap-2 bg-secondary p-2 px-4"
        >
          <Icon
            :name="colorMode.value === 'light' ? 'ph:sun-bold' : 'ph:moon-bold'"
            class="text-text aspect-square text-xl"
          />
          <Icon
            name="ph:caret-down-bold"
            class="text-text aspect-square text-2xl"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="flex w-min items-center justify-center py-2"
        >
          <DropdownMenuItem
            class="aspect-square"
            v-on:click="setTheme('light')"
          >
            <Icon name="ph:sun-bold" class="text-text text-xl" />
          </DropdownMenuItem>
          <DropdownMenuItem class="aspect-square" v-on:click="setTheme('dark')">
            <Icon name="ph:moon-bold" class="text-text text-xl" />
          </DropdownMenuItem>
          <DropdownMenuItem
            class="aspect-square"
            v-on:click="setTheme('system')"
          >
            <Icon name="ph:desktop-bold" class="text-text text-xl" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
