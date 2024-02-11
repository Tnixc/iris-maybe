<script setup>
const colorMode = useColorMode();

function setTheme(theme) {
  colorMode.preference = theme;
  colorMode.value = theme;
}
</script>
<template>
  <nav class="flex justify-center">
    <div class="flex w-full max-w-5xl items-center bg-secondary">
      <div class="flex items-center gap-2 bg-secondary p-3">
        <NuxtImg src="/images/logos/iristrans.webp" width="42" height="42" />
        <h1 class="font-mono text-2xl">IRIS SHADERS</h1>
      </div>
      
      <NuxtLink
        class="flex h-full items-center gap-2 bg-blue-600 px-5 font-mono text-xl text-white"
        to="/download"
      >
        <Icon
          name="material-symbols:download-sharp"
          class="aspect-square text-3xl text-white"
        />
        <span>Download</span>
      </NuxtLink>
      <DropdownMenu>
        <DropdownMenuTrigger
          class="flex h-full select-none items-center gap-2 p-2 px-4"
        >
          <Icon
            :name="colorMode.value === 'light' ? 'ph:sun' : 'ph:moon'"
            class="text-text aspect-square text-2xl"
          />
          <Icon name="ph:caret-down" class="text-text aspect-square text-2xl" />
        </DropdownMenuTrigger>
        <DropdownMenuContent class="flex w-min">
          <DropdownMenuItem
            class="aspect-square"
            v-on:click="setTheme('light')"
          >
            <Icon name="ph:sun" class="text-text text-2xl" />
          </DropdownMenuItem>
          <DropdownMenuItem class="aspect-square" v-on:click="setTheme('dark')">
            <Icon name="ph:moon" class="text-text text-2xl" />
          </DropdownMenuItem>
          <DropdownMenuItem
            class="aspect-square"
            v-on:click="setTheme('system')"
          >
            <Icon name="ph:desktop" class="text-text text-2xl" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
  <div></div>
</template>
