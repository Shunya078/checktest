<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" class="title-text" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style scoped lang="scss">
@import "@/assets/scss/_imports.scss";

.title-text{
  font-size: 28px;
  padding-left: 24px;
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
