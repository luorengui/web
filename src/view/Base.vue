<template>
  <!-- <v-app > -->
  <div>
    <navigation-bar :drawer="drawer"></navigation-bar>
    <title-bar @isvisable="changeVisable"></title-bar>
    <main-bar></main-bar>
    <footer-bar></footer-bar>
  </div>

  <!-- </v-app> -->
</template>

<script>
import NavigationBar from "./navigation/Navigation";
import TitleBar from "./header/Header";
import FooterBar from "./footer/Footer.vue";
import MainBar from "./main/Main.vue";

export default {
  name: "Base",
  components: {
    NavigationBar,
    TitleBar,
    FooterBar,
    MainBar,
  },
  data: () => ({
    drawer: { isvisable: false },
  }),
  methods: {
    changeVisable(data) {
      this.drawer.isvisable = data;
    },
  },
};
</script>