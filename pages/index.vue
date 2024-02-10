<script setup>
const { locale } = useI18n();
const colorMode = useColorMode();
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="cs">Czech</option>
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="en_US">English (US)</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="nl">Dutch</option>
        <option value="pt_BR">Portuguese (Brazil)</option>
        <option value="ru">Russian</option>
        <option value="sv">Swedish</option>
        <option value="zh_Hans">Chinese (Simplified)</option>
        <option value="zh_Hant">Chinese (Traditional)</option>
      </select>
      <p>{{ $t("top.title") }}</p>
    </form>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <div class="dark:bg-black dark:text-white bg-zinc-200 text-black">
      Hello word
    </div>
  </div>
</template>

<style>
</style>