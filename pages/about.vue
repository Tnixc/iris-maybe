<script setup>
const { locale } = useI18n()
console.log(locale.value)
definePageMeta({
  title: "z",
})
</script>
<template>
  <Nav />
  <Container>
    <AboutHero />
    <AboutInfo />
    <AboutPerformance />
    <AboutScreenshots />
  </Container>
  <Footer />
</template>