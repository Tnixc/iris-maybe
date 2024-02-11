<template>
  <nav class="flex justify-center">
    <div class="flex w-full max-w-5xl items-center">
      <NuxtImg src="/images/logos/iristrans.webp" width="32" height="32" />
      <div>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent class="w-4">
          <DropdownMenuItem><Icon name="ph:sun" class="text-2xl text-text" />          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
</template>
