<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <nuxt-link to="/">home</nuxt-link>
    <!-- <img src="/img/nuxt.png" alt="Discover Nuxt 3" /> -->
    <!-- <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" /> -->
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route);
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
