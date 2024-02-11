<script setup>
const { locale } = useI18n();
</script>
<template>
  <!-- pretter-ignore -->
  <section class="border-b-2 md:p-10 p-3">
    <div class="flex flex-wrap items-end justify-between gap-4 border-x border-t p-10" >
      <h1 class="text-4xl">{{ $t("index.heading2") }}</h1>
      <h2 class="text-2xl text-muted-foreground">
        {{ $t("index.subheading2") }}
      </h2>
    </div>
    <div class="grid md:grid-cols-2 md:grid-rows-2 border ">
      <NuxtImg
        width="2560"
        height="1440"
        class="aspect-video border"
        src="/images/screenshots/mainscreenshot1.webp"
        alt="Main screenshot 1"
      />
      <div class="border h-full p-10 flex flex-col">
        <h1 class="text-2xl pb-5">{{$t('index.image1')}}</h1>
        <p class="text-muted-foreground">{{$t('index.imagedesc1').replace(/<span class='text-span-2'><br>.*./,"")}}</p>
        <div class="flex-grow"></div>
        <p class="text-muted-foreground">{{$t('index.imagedesc1').replace(/.*.<span class='text-span-2'><br>/,"").replace("</span>","")}}</p>
      </div>
      <div class="border h-full p-10 flex flex-col">
        <h1 class="text-2xl pb-5 flex items-center gap-2">{{$t('index.image2')}}
          <NuxtImg
          src="/images/logos/sodium1x.webp"
          alt="sodium"
          class="inline aspect-square h-[1.5ch] rounded-full"
          /></h1>
        <p class="text-muted-foreground">{{$t('index.imagedesc2').replace(/<br><span class='text-span-2'>.*./,"")}}</p>

          <div class="flex-grow"></div>
          <p class="text-muted-foreground">{{$t('index.imagedesc2').replace(/.*.<br><span class='text-span-2'>/,"").replace("</span>","")}}</p>
      </div>
      <NuxtImg
        width="2560"
        height="1440"
        class="aspect-video border"
        src="/images/screenshots/mainscreenshot2.webp"
        alt="Main screenshot 2"
      />
    </div>
    <NuxtLink
      class="flex h-fit items-center gap-2 border-b border-r border-t font-mono text-lg bg-accent hover:underline p-4 px-10"
      :to="`/${locale}/about`"
    >
    {{ $t('common.about') }}
    <Icon name="ph:arrow-right-bold" />
  </NuxtLink>
  </section>
</template>