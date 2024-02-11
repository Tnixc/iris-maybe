<script setup>
const colorMode = useColorMode();
</script>
<template>
  <section class="border-b-2 border-secondary grid-cols-3">
    <NuxtImg 
      :src="colorMode.value === 'dark' ? '/images/iris-bkg-dark.webp' : '/images/iris-bkg-light.webp'"
    />
  </section>
</template>