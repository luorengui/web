<template>
  <v-container>
    <v-app-bar app color="white" light>
      <v-app-bar-nav-icon @click="clickHandle"></v-app-bar-nav-icon>

      <v-toolbar-title>hello</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <!-- <main-bar></main-bar> -->
        </v-tab-item>
      </v-tabs-items>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "TitleBar",

  data: () => ({
    drawer: true,
    tab: null,
    items: ["足球", "shopping", "videos", "images", "news"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  methods: {
    clickHandle() {
      this.$emit("isvisable", (this.drawer = !this.drawer));
    },
  },

  //使用 $emit派发事件
};
</script>