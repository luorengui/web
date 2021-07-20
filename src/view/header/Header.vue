<template>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="showNav"></v-app-bar-nav-icon>
      <v-toolbar-title>hello</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
   
  }),
  methods: {
    selectTab(name) {
      this.$emit("getSelectTab", (name));
    },
    showNav() {
      this.$emit("showNav", (this.drawer = !this.drawer));
    },
  },

  //使用 $emit派发事件
};
</script>