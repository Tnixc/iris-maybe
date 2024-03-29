<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value;
});
const currentLocale = computed(() => {
  return locales.value.find((i) => i.code === locale.value);
});
</script>

<template>
  <div class="mx-auto w-full max-w-7xl bg-secondary p-10">
    <div class="flex flex-wrap gap-10">
      <div class="flex min-w-fit flex-col gap-2">
        <a
          href="https://github.com/IrisShaders/Iris"
          target="_blank"
          class="hover:underline"
        >
          <Icon name="mdi:github" class="text-text aspect-square text-xl" />
          GitHub
        </a>
        <a
          href="https://discord.gg/jQJnav2jPu"
          target="_blank"
          class="hover:underline"
        >
          <Icon
            name="ic:baseline-discord"
            class="text-text aspect-square text-xl"
          />
          Discord
        </a>

        <a
          href="https://twitter.com/IrisShaders"
          target="_blank"
          class="hover:underline"
        >
          <Icon name="mdi:twitter" class="text-text aspect-square text-xl" />
          Twitter
        </a>

        <a
          rel="me"
          href="https://tech.lgbt/@iris"
          target="_blank"
          class="hover:underline"
        >
          <Icon name="mdi:mastodon" class="text-text aspect-square text-xl" />
          Mastodon
        </a>

        <a
          href="https://www.patreon.com/coderbot"
          target="_blank"
          class="hover:underline"
        >
          <Icon name="mdi:patreon" class="text-text aspect-square text-xl" />
          Patreon
        </a>
      </div>
      <div>
        <h1 class="pb-2 text-xl">{{ $t("common.footer2") }}</h1>
        <div class="flex gap-5">
          <NuxtLink class="text-muted-foreground hover:underline" to="/about">{{
            $t("common.about")
          }}</NuxtLink>
          <NuxtLink
            class="text-muted-foreground hover:underline"
            to="/download"
            >{{ $t("common.download") }}</NuxtLink
          >
          <a
            class="text-muted-foreground hover:underline"
            href="https://modrinth.com/mod/iris"
            >{{ $t("common.modrinth") }}</a
          >
        </div>
      </div>
      <div class="flex flex-grow flex-col items-end gap-12">
        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex h-fit w-fit items-center gap-2 bg-accent p-2 px-3"
          >
            <Icon name="ph:translate" class="text-text aspect-square text-xl" />
            <span class="select-none">{{ currentLocale.name }}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              v-for="locale in availableLocales"
              :key="locale.code"
            >
              <NuxtLink class="w-full" :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div class="w-full text-right">
          {{ $t("common.copyright") }}
        </div>
      </div>
    </div>
  </div>
</template>
