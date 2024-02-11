<script setup>
const colorMode = useColorMode();
const {locale} = useI18n();
function setTheme(theme) {
  colorMode.preference = theme;
  colorMode.value = theme;
}
</script>
<template>
  <nav class="flex justify-center fixed top-0 right-0 left-0 z-50">
    <div class="flex w-full max-w-7xl items-center bg-secondary/70 backdrop-blur-lg ">
      <NuxtLink class="flex items-center gap-2 bg-secondary p-1" :to="`/${locale}/`">
        <NuxtImg src="/images/logos/iristrans.webp" width="42" height="42" />
        <h1 class="font-mono md:text-2xl pr-2">IRIS SHADERS</h1>
      </NuxtLink>
      <div class="flex-grow"></div>
      <NuxtLink
        class="flex h-full items-center px-5 font-mono md:text-lg hover:underline hover:bg-accent text-right"
        :to="`/${locale}/about`"
      >{{$t('common.about')}}</NuxtLink>
      <NuxtLink
        class="flex h-full items-center gap-2 bg-blue-600 px-5 font-mono text-lg text-white hover:underline"
        :to="`/${locale}/download`"
      >
        <Icon
          name="material-symbols:download-sharp"
          class="aspect-square text-xl text-white"
        />
        <span class="md:block hidden">{{$t('common.download')}}</span>
      </NuxtLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          class="flex h-full select-none items-center gap-2 p-2 px-4 bg-secondary"
        >
          <Icon
            :name="colorMode.value === 'light' ? 'ph:sun-bold' : 'ph:moon-bold'"
            class="text-text aspect-square text-xl"
          />
          <Icon name="ph:caret-down-bold" class="text-text aspect-square text-2xl" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="flex w-min items-center justify-center py-2">
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
  </nav>
  <div></div>
</template>
