<template>
  <!-- prettier-ignore -->
  <section class="border-b-2 p-3 md:p-10">
    <Tabs default-value="shadows" class="border p-10">
      <div class="flex items-center justify-between">
        <div>
        <h1 class="text-3xl">
          {{ $t("index.heading3") }}
        </h1>
        <h2 class="text-muted-foreground pt-2">
          {{ $t("index.subheading3") }}
        </h2>
      </div>
      <TabsList class="">
        <TabsTrigger value="shadows"> {{$t('index.shadows')}} </TabsTrigger>
        <TabsTrigger value="eitites"> {{ $t('index.entities') }} </TabsTrigger>
      </TabsList>
    </div>
      <TabsContent value="shadows">
        <div class="md:grid grid-cols-2">
          <NuxtImg placeholder sizes="100vw sm:50vw md:100vw"   src="/images/screenshots/godrays.webp" alt="godrays" class="aspect-video border bg-[#72936A]" width="2560" height="1400" />
          <div class="border p-6 flex flex-col">
            <h1 class="text-2xl pb-5">{{$t('index.screenshottitle1')}}</h1>
            <p class="text-muted-foreground">{{$t('index.screenshotdesc1').replaceAll("&","'").replaceAll("#x27;","").replace(/<br>.*./,"")}}</p>
            <div class="flex-grow"></div>
            <p class="text-muted-foreground">{{$t('index.screenshotdesc1').replace(/.*.<br><span class='text-span-2'>/,"").replace("</span>","")}}</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="eitites">
        <div class="md:grid grid-cols-2">
          <NuxtImg placeholder sizes="100vw sm:50vw md:100vw"   src="/images/screenshots/entities.webp" alt="entities" class="aspect-video border bg-[#906F52]" width="2560" height="1400" />
          <div class="border p-6 flex flex-col">
            <h1 class="text-2xl pb-5">{{$t('index.screenshottitle2')}}</h1>
            <p class="text-muted-foreground">{{$t('index.screenshotdesc2').replaceAll("&","'").replaceAll("#x27;","").replace(/<br>.*./,"")}}</p>
            <div class="flex-grow"></div>
            <p class="text-muted-foreground">{{$t('index.screenshotdesc2').replace(/.*.<br><span class='text-span-2'>/,"").replace("</span>","")}}</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </section>
</template>
