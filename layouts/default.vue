<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app flat height="96" color="white">
      <v-toolbar-title v-text="title" class="title-text" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      class="d-flex justify-center"
      :absolute="!fixed"
      app
      color="accent"
      height="72"
    >
      <span class="footer-text"
        >&copy; {{ new Date().getFullYear() }}. All rights reserved.</span
      >
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_imports.scss";

.title-text {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding-left: 24px;
}

.footer-text {
  font-size: 16px;
  color: $gray;
}
</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: "性格診断テスト",
    };
  },
};
</script>
