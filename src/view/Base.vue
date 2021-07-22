<template>
  <v-app @click="VisableNav">
    <Navigation :drawer="drawer"></Navigation>
    <Header @showNav="showNav" @getSelectTab="getSelectTab"></Header>
    <keep-alive>
      <Main :selectTab="selectTab"></Main>
    </keep-alive>

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
    drawer: { isVisable: false },
    selectTab: "",
  }),
  methods: {
    showNav(isShow) {
      console.log(isShow, "dddd");
      this.drawer.isVisable = isShow;
    },
    getSelectTab(tab) {
      this.selectTab = tab;
      console.log(this.selectTab);
    },
    VisableNav() {
      this.drawer.isVisable = !this.drawer.isVisable;
    },
  },
};
</script>