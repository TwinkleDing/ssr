<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <nuxt-link to="/about">about</nuxt-link>
    <AppAlert> This is an auto-imported component </AppAlert>
    Page visits: {{ count }}
  </div>
</template>
<script lang="ts" setup>
const appConfig = useAppConfig();
console.log(appConfig.title);
const { data: count } = await useFetch("http://localhost:6677/api/menuRouter");
console.log(count.value);

await useAsyncData(() => $fetch("http://localhost:6677/api/menuRouter"), {
  transform: (ss) => console.log(ss),
});
definePageMeta({
  layout: "custom",
});
</script>
