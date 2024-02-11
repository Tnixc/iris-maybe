<template>
  <Nav />
  <Container>
    <div class="grid-cols-3 gap-2 p-3 md:grid md:p-10">
      <div class="relative col-span-2 border p-10">
        <h1 class="text-3xl text-accent-foreground">
          {{ $t("download.heading") }}
          <span class="pt-2 text-muted-foreground/50">
            {{ $t("download.subheading") }}
          </span>
        </h1>
        <p class="py-4 text-muted-foreground">
          {{
            $t("download.description")
              .replaceAll("&", "'")
              .replaceAll("#x27;", "")
          }}
        </p>
        <a
          href=""
          class="flex w-fit flex-wrap items-center gap-4 bg-blue-600 p-4 hover:underline"
        >
          <Icon
            name="material-symbols:download-sharp"
            class="aspect-square text-3xl text-white"
          />
          <span class="text-2xl text-white">{{
            $t("download.downloadjar")
          }}</span>
        </a>
      </div>
      <div class="relative h-full w-full overflow-hidden border">
        <div
        class="pointer-events-none absolute inset-16 -z-50 aspect-square -translate-x-2/3 -translate-y-2/3 rounded-full bg-gradient-to-bl from-purple-500/10 via-amber-300/40 to-blue-600/20 blur-2xl dark:via-blue-600/10"
      ></div>
      </div>
      <div class="col-span-2 border p-10">
        <h1 class="pb-6 text-3xl text-accent-foreground">
          {{ $t("download.alternatedownloads") }}
          <span class="block pt-2 text-2xl text-muted-foreground/50">
            {{
              $t("download.alternatedownloadsubheading")
                .replaceAll("&", "'")
                .replaceAll("#x27;", "")
            }}
          </span>
        </h1>
        <div class="flex gap-2 flex-wrap">
          <a
            href=""
            class="flex w-fit flex-wrap items-center gap-4 bg-blue-600 p-4 hover:underline"
          >
            <Icon
              name="simple-icons:modrinth"
              class="aspect-square text-2xl text-white"
            />
            <span class="text-xl text-white">{{
              $t("download.getmodrinth")
            }}</span>
          </a>
          <a
            href=""
            class="flex w-fit flex-wrap items-center gap-4 bg-blue-600 p-4 hover:underline"
          >
            <Icon
              name="simple-icons:github"
              class="aspect-square text-2xl text-white"
            />
            <span class="text-xl text-white">{{
              $t("download.getgithub")
            }}</span>
          </a>
        </div>
      </div>
      <div class="relative h-full w-full overflow-hidden border">
        <div
          class="pointer-events-none absolute inset-16 -z-50 aspect-square translate-x-2/3 translate-y-2/3 rounded-full bg-gradient-to-bl from-purple-500/10 via-red-300/60 to-blue-600/20 blur-2xl dark:via-purple-600/10"
        ></div>
      </div>
    </div>
  </Container>
  <Footer />
</template>
