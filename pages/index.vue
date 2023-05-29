<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <nuxt-link to="/about">about</nuxt-link>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>
<script lang="ts" setup>
const appConfig = useAppConfig();
console.log(appConfig.title);
</script>
