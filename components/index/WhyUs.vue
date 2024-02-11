<template>
  <section class="border-b-2 p-10">
    <div class="flex flex-wrap gap-4 justify-between items-end pb-5 px-1">
    <h1 class="text-4xl">{{ $t("top.heading1") }}</h1>
    <h2 class="text-muted-foreground text-2xl">{{$t('top.subheading1')}}</h2>
  </div>
    <div class="grid md:grid-cols-3 gap-2">
      <div class="border p-4 flex w-fit flex-col gap-2">
        <Icon
          name="ic:round-insert-drive-file"
          class="aspect-square h-10 text-4xl dark:text-blue-200 text-blue-950"
        />
        <h2 class="text-2xl">{{ $t("top.card1") }}</h2>
        <p class="text-muted-foreground">{{ $t("top.carddesc1") }}</p>
      </div>
      <div class="border p-4 flex w-fit flex-col gap-2">
        <Icon
          name="ic:outline-window"
          class="aspect-square h-10 text-4xl dark:text-amber-200 text-amber-950"
        />
        <h2 class="text-2xl">{{ $t("top.card2") }}</h2>
        <p class="text-muted-foreground">{{ $t("top.carddesc2") }}</p>
      </div>
      <div class="border p-4 flex w-fit flex-col gap-2">
        <Icon
          name="mdi:github"
          class="aspect-square h-10 text-4xl dark:text-purple-200 text-purple-950"
        />
        <h2 class="text-2xl">{{ $t("top.card3") }}</h2>
        <p class="text-muted-foreground">{{ $t("top.carddesc2") }}</p>
      </div>
    </div>
  </section>
</template>
