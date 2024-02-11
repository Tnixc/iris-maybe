<template>
  <section class="border-b-2 md:p-10 p-3" >
    <Tabs default-value="account" class="">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <h1>ac</h1>
      </TabsContent>
      <TabsContent value="password">
        <h1>pw</h1>
      </TabsContent>
    </Tabs>
  </section>
</template>