<template>
  <!-- prettier-ignore -->
  <section class="border-b-2 p-3 md:p-10">
    <div class="border p-10">
      <h1 class="text-3xl text-blue-500 dark:text-blue-400">
        {{ $t("about.performance") }}
      </h1>
      <h2 class="py-4 text-xl">{{ $t("about.performanceheading") }}</h2>
    </div>
    <div class="md:grid md:grid-cols-3">
      <div class="border p-10">
        <NuxtImg
          src="/images/logos/minecraft-volume-alpha.webp"
          alt="Minecraft Vanilla"
          class="aspect-square"
          height="1400"
          width="1400"
        />
      </div>
      <div class="col-span-2 border p-10">
        <h1 class="pb-5 text-3xl">{{ $t("about.vanilla") }}</h1>
        <p class="text-muted-foreground">
          {{
            $t("about.vanillamessage")
              .replaceAll("&", "'")
              .replaceAll("#x27;", "")
          }}
        </p>
      </div>
      <div
        class="col-span-3 flex flex-wrap-reverse justify-between border p-10"
      >
        <div class="md:w-2/3">
          <h1 class="pb-5 text-3xl">
            {{$t("about.sodium").replace(" + ","").replace(/<span.*./,"")}}
             + 
            <span
              class="bg-gradient-to-b  bg-clip-text text-transparent from-lime-600 to-emerald-500 dark:from-lime-500 dark:to-emerald-200"
              >Sodium</span
            >
          </h1>
          <p class="text-muted-foreground">
            {{
              $t("about.sodiummessage")
                .replaceAll("&", "'")
                .replaceAll("#x27;", "")
            }}
          </p>
        </div>
        <div class="border p-10">
          <NuxtImg
            src="/images/logos/sodium1x.webp"
            alt="Sodium mod"
            class="mx-auto aspect-square"
          />
        </div>
      </div>
      <div class="border p-10">
        <NuxtImg
          src="/images/logos/iristrans.webp"
          alt="Minecraft Vanilla"
        />
      </div>
      <div class="col-span-2 border p-10">
        <h1 class="pb-5 text-3xl">
          {{$t("about.sodium").replace(" + ","").replace(/<span.*./,"")}}
           + 
          <span
            class="bg-gradient-to-b  bg-clip-text text-transparent from-lime-600 to-emerald-500 dark:from-lime-500 dark:to-emerald-200"
            >Sodium</span>
          + 
          <span
            class="bg-gradient-to-b  bg-clip-text text-transparent from-blue-600 to-purple-500 dark:from-blue-500 dark:to-purple-200"
            >Iris</span>
        </h1>
        <p class="text-muted-foreground">
          {{
            $t("about.sodiumirismessage")
              .replaceAll("&", "'")
              .replaceAll("#x27;", "")
          }}
        </p>
      </div>
    </div>
  </section>
</template>
