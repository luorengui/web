<template>
  <v-container>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="clickHandle"></v-app-bar-nav-icon>

      <v-toolbar-title>hello</v-toolbar-title>

    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "TitleBar",

  data: () => ({
    drawer: true,

  }),
  methods: {
    clickHandle() {
      this.$emit("isvisable", (this.drawer = !this.drawer));
    },
  },

  //使用 $emit派发事件
};
</script>