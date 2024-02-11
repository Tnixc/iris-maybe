<script setup>
import { ref, onMounted, reactive } from 'vue'

const carouselContainerRef = ref(null)
let cooldown = 5000;
const state = reactive({
  current: 1,
  totalCount: 12
})

function accessApi() {
  carouselContainerRef.value?.carouselApi.on('select', () => {
    state.current = carouselContainerRef.value?.carouselApi.selectedScrollSnap() + 1;
    state.totalCount = carouselContainerRef.value?.carouselApi.slideNodes().length;
    cooldown = 5000;
  })
}
function scrollNext() {
  carouselContainerRef.value?.carouselApi.scrollNext()
}
onMounted(() => {
  accessApi()
  setInterval(() => {
    if (cooldown <= 0) {
      scrollNext()
      cooldown = 5000;
    } else {
      cooldown -= 1000;
    }
  }, 2000);
})
</script>
<template>
  <section class="p-3 md:p-10">
    <div class="border p-10">
      <h1 class="pb-3 text-center text-4xl">
        {{ $t("about.screenshot") }}
      </h1>
      <h2 class="text-center text-muted-foreground">
        {{ $t("about.screenshotsubheading") }}
      </h2>
    </div>
    <div class="flex flex-col items-center justify-center border p-10">
      <Carousel class="aspect-video w-full" ref="carouselContainerRef">
        <CarouselContent>
          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen1.webp"
              alt="Screenshot 1"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot1") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen2.webp"
              alt="Screenshot 2"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot2") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen3.webp"
              alt="Screenshot 3"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot3") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen4.webp"
              alt="Screenshot 4"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot4") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen5.webp"
              alt="Screenshot 5"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot5") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen6.webp"
              alt="Screenshot 6"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot6") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen7.webp"
              alt="Screenshot 7"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot7") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen8.webp"
              alt="Screenshot 8"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot8") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen9.webp"
              alt="Screenshot 9"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot9") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen10.webp"
              alt="Screenshot 10"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot10") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen11.webp"
              alt="Screenshot 11"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot11") }}
            </p>
          </CarouselItem>

          <CarouselItem class="flex flex-col items-center justify-center">
            <NuxtImg
              src="/images/screenshots/screen12.webp"
              alt="Screenshot 12"
              class="aspect-video select-none"
            />
            <p class="mt-1 border p-2 text-muted-foreground">
              {{ $t("about.screenshot12") }}
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="translate-x-4 scale-125" />
        <CarouselNext class="-translate-x-4 scale-125" />
      </Carousel>
      <div class="py-2 text-center text-sm text-muted-foreground">
        Screenshot {{ state.current }} of {{ state.totalCount }}
      </div>
    </div>
    <p class="text-muted-foreground/50">{{ $t("about.note") }}</p>
  </section>
</template>
