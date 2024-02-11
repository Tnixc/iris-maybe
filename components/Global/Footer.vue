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
  <footer class="w-full max-w-5xl bg-secondary p-10">
    <div class="flex gap-10">
      <div class="flex flex-col">
        <div class="">
          <a
            href="https://github.com/IrisShaders/Iris"
            target="_blank"
            class="hover:underline"
          >
            <Icon name="mdi:github" class="text-text aspect-square text-xl" />
            GitHub
          </a>
        </div>
        <div class="">
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
        </div>
        <div class="">
          <a
            href="https://twitter.com/IrisShaders"
            target="_blank"
            class="hover:underline"
          >
            <Icon name="mdi:twitter" class="text-text aspect-square text-xl" />
            Twitter
          </a>
        </div>
        <div class="">
          <a
            rel="me"
            href="https://tech.lgbt/@iris"
            target="_blank"
            class="hover:underline"
          >
            <Icon name="mdi:mastodon" class="text-text aspect-square text-xl" />
            Mastodon
          </a>
        </div>
        <div class="">
          <a
            href="https://www.patreon.com/coderbot"
            target="_blank"
            class="hover:underline"
          >
            <Icon name="mdi:patreon" class="text-text aspect-square text-xl" />
            Patreon
          </a>
        </div>
      </div>
      <div>
        <h1 class="text-xl pb-2">{{ $t("common.footer2") }}</h1>
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
      <div class="flex-grow"></div>
      <div class="flex flex-col items-end gap-12">
      <DropdownMenu>
        <DropdownMenuTrigger class="h-fit bg-accent p-2 w-fit">
          <Icon name="ph:translate" class="text-text aspect-square text-xl" />
          <span>{{ currentLocale.name }}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem v-for="locale in availableLocales" :key="locale.code">
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
  </footer>
</template>
