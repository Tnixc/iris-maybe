<template>
  <section class="border-b-2 md:p-10 p-3">
    <div class="p-10 border">
    <h1 class="text-3xl">{{$t('about.aboutproject')}}</h1>
    <h2 class=" py-4 text-xl">{{$t('about.messageheading')}}</h2>
    <div class="max-w-4xl text-muted-foreground">
    <p>{{$t('about.message').replaceAll("&","'").replaceAll("#x27;","").split("<br><br>")[0].replace("<br><br>","")}}</p>
    <br>
    <p>{{$t('about.message').replaceAll("&","'").replaceAll("#x27;","").split("<br><br>")[1].replace("<br><br>","")}}</p>
    <br>
    <p>{{$t('about.message').replaceAll("&","'").replaceAll("#x27;","").split("<br><br>")[2].replace("<br><br>","")}}</p>
  </div></div>
  </section>
</template>