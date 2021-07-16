<template>

  <v-app>
    <Navigation :drawer="drawer"></Navigation>
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
    drawer: {isVisable:false},
  }),
  methods: {
    showNav(isShow) {
      this.drawer.isVisable = isShow;
    },
  },
};
</script>