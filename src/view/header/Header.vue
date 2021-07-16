<template>
  <v-container>
    <v-app-bar app  color="white">
      <v-app-bar-nav-icon @click="showNav"></v-app-bar-nav-icon>
      <v-toolbar-title>hello</v-toolbar-title>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    isvisible: true,

  }),
  methods: {
    showNav() {
      this.$emit("showNav", (this.isvisible = !this.isvisible));
    },
  },

  //使用 $emit派发事件
};
</script>