<template>
  <section class="p-3 md:p-10 border-b-2">
    <div class="p-10 border">
      <h1 class="text-3xl text-blue-500 dark:text-blue-400">{{$t('about.performance')}}</h1>
      <h2 class="py-4 text-xl">{{$t('about.performanceheading')}}</h2>
    </div>
    <div class="md:grid-cols-3 grid">
      <div class="p-10 border">
        <NuxtImg src="/images/logos/minecraft-volume-alpha.webp" alt="Minecraft Vanilla" />
      </div>
      <div class="col-span-2 border p-10">
        <h1 class="text-2xl pb-5">{{$t('about.vanilla')}}</h1>
        <p class="text-muted-foreground">
          {{$t('about.vanillamessage').replaceAll("&","'").replaceAll("#x27;","")}}
        </p>
      </div>
      <div class="col-span-2 border p-10">
        <h1 class="text-2xl pb-5">{{$t('about.vanilla')}}</h1>
        <p class="text-muted-foreground">
          {{$t('about.vanillamessage').replaceAll("&","'").replaceAll("#x27;","")}}
        </p>
      </div>
      <div class="p-10 border">
        <NuxtImg src="/images/logos/sodium1x.webp" alt="Minecraft Vanilla" />
      </div>
      <div class="p-10 border">
        <NuxtImg src="/images/logos/minecraft-volume-alpha.webp" alt="Minecraft Vanilla" />
      </div>
      <div class="col-span-2 border p-10">
        <h1 class="text-2xl pb-5">{{$t('about.vanilla')}}</h1>
        <p class="text-muted-foreground">
          {{$t('about.vanillamessage').replaceAll("&","'").replaceAll("#x27;","")}}
        </p>
      </div>
    </div>
  </section>
</template>