<template lang="pug">
  .home
    img(src="../assets/images/avatar.svg")
    //- .button-group
    v-container
      v-row
        v-col( v-for="subject in subjects" :key="subject.name" cols="12" sm="4" lg="4" xl="4")
          router-link(:to="{name: 'TheSubjectUnits', params: {theSubjectSlug: subject.slug}}")
            //- AppButton(:name="subject.name" :icon="subject.icon")
            AppButton
              i(slot="icon" :class="subject.icon")
              p(slot="name") {{subject.name}}
</template>

<script>
// @ is an alias to /src
import AppButton from "@/components/ui/AppButton.vue";
import store from "@/store/store.js";
export default {
  name: "Home",
  components: {
    AppButton
  },
  data() {
    return {
      subjects: store.subjects
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  // center image
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 400px;
  padding: 12px;
}
</style>
