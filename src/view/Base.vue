<template>

  <v-app>
    <Navigation :isvisable="isvisable"></Navigation>
    <Header @showNav="showNav"></Header>
    <Main></Main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from "./navigation/Navigation";
import Header from "./header/Header";
import Footer from "./footer/Footer.vue";
import Main from "./main/Main.vue";

export default {
  name: "Base",
  components: {
    Navigation,
    Header,
    Footer,
    Main,
  },
  data: () => ({
    isvisable: false,
  }),
  methods: {
    showNav(isShow) {
      this.isvisable = isShow;
    },
  },
};
</script>