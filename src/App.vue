<template lang="pug">
  v-app
    AppHeader
    router-view(:key="$router.path")
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";

export default {
  name: "App",

  components: {
    AppHeader
  },

  data: () => ({
    //
  })
};
</script>

<style>
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none !important;
}
.theme--light.v-application {
  background: none;
}
</style>
