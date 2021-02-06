<template>
  <div id="app">
    <v-app id="inspire">
      <navigation-bar :drawer="drawer"></navigation-bar>
      <title-bar @isvisable="changeVisable"></title-bar>
      <!-- <main-bar></main-bar> -->
      <footer-bar></footer-bar>
    </v-app>
  </div>
</template>

<script>
import NavigationBar from "./view/navigation/Navigation";
import TitleBar from "./view/header/Header";
// import MainBar from "./view/main/Main";
import FooterBar from "./view/footer/Footer.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    TitleBar,
    // MainBar,
    FooterBar,
  },
  data: () => ({
    drawer: {isvisable:true},
  }),
  methods: {
    changeVisable(data) {
      this.drawer.isvisable = data;
    },
  },
};
</script>
