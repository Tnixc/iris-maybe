<script setup>
const { locale } = useI18n();
function setLocale(l) {
  locale.value = l;
}
setLocale('fr')
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem><span v-on:click="setLocale('cs')">Czech</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('de')">German</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('en')">English</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('en_US')">English (US)</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('es')">Spanish</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('fr')">French</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('nl')">Dutch</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('pt_BR')">Portuguese (Brazil)</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('ru')">Russian</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('sv')">Swedish</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('zh_Hans')">Chinese (Simplified)</span></DropdownMenuItem>
      <DropdownMenuItem><span v-on:click="setLocale('zh_Hant')">Chinese (Traditional)</span></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
