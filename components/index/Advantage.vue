<template>
  <section class="border-b-2 p-3 md:p-10">
    <Tabs default-value="shadows" class="border p-10">
      <div class="flex items-center justify-between">
        <div>
        <h1>
          {{ $t("top.heading3") }}
        </h1>
        <h2 class="text-muted-foreground pt-2">
          {{ $t("top.subheading3") }}
        </h2>
      </div>
      <TabsList class="">
        <TabsTrigger value="shadows"> {{$t('top.shadows')}} </TabsTrigger>
        <TabsTrigger value="eitites"> {{ $t('top.entities') }} </TabsTrigger>
      </TabsList>
    </div>
      <TabsContent value="shadows">
        <div class="flex flex-col">

        </div>
      </TabsContent>
      <TabsContent value="eitites">
        <h1>pw</h1>
      </TabsContent>
    </Tabs>
  </section>
</template>
