<script setup>
import i18n from '@/i18n.config'
const {locale}  = useI18n();
const t = i18n('about').messages[locale.value].about.abouttitle
useHead({
  title: t,
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