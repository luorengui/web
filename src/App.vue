<template>
  <div id="app">
    <v-app id="inspire">
      <navigation-bar :drawer="drawer"></navigation-bar>
      <title-bar @isvisable="changeVisable"></title-bar>
      <main-bar></main-bar>
      <footer-bar></footer-bar>
    </v-app>
  </div>
</template>

<script>
import NavigationBar from "./view/navigation/Navigation";
import TitleBar from "./view/header/Header";
import FooterBar from "./view/footer/Footer.vue";
import MainBar from "./view/main/Main.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    TitleBar,
    FooterBar,
    MainBar,
  },
  data: () => ({
    drawer: {isvisable:false},
  }),
  methods: {
    changeVisable(data) {
      this.drawer.isvisable = data;
    },
  },
};
</script>
