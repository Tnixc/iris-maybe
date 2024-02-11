<template>
  <section class="border-b-2 p-10">
    <div class="flex flex-wrap items-end justify-between gap-4 border-x border-t p-10" >
      <h1 class="text-4xl">{{ $t("top.heading2") }}</h1>
      <h2 class="text-2xl text-muted-foreground">
        {{ $t("top.subheading2") }}
      </h2>
    </div>
    <div class="grid md:grid-cols-2 md:grid-rows-2 border ">
      <NuxtImg
        class="aspect-video border"
        src="/images/screenshots/mainscreenshot1.webp"
        alt="Main screenshot 1"
      />
      <div class="border h-full p-10 flex flex-col">
        <h1 class="text-2xl pb-5">{{$t('top.image1')}}</h1>
        <!-- pretter-ignore -->
        <p class="text-muted-foreground">{{$t('top.imagedesc1').replace(/<span class='text-span-2'><br>.*./,"")}}</p>
        <!-- pretter-ignore -->
        <p class="text-muted-foreground">{{$t('top.imagedesc1').replace(/.*.<span class='text-span-2'><br>/,"").replace("</span>","")}}</p>
        <div class="flex-grow"></div>
      </div>
      <div class="border h-full p-10">
        <h1 class="text-2xl pb-5">{{$t('top.image2')}}</h1>
        <!-- pretter-ignore -->
        <p class="text-muted-foreground">{{$t('top.imagedesc2').replace(/<br><span class='text-span-2'>.*./,"")}}</p>
          <div class="flex-grow"></div>
        <!-- pretter-ignore -->
          <p class="text-muted-foreground">{{$t('top.imagedesc2').replace(/.*.<br><span class='text-span-2'>/,"").replace("</span>","")}}</p>
      </div>
      <NuxtImg
        class="aspect-video border"
        src="/images/screenshots/mainscreenshot2.webp"
        alt="Main screenshot 2"
      />
    </div>
  </section>
</template>
