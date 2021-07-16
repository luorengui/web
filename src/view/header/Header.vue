<template>
  <v-container>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click="showNav"></v-app-bar-nav-icon>
      <v-toolbar-title>hello</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab
            v-model="tab"
            v-for="item in tab"
            :key="item.name"
            @click="selectTab(item.name)"
          >
            {{ item.value }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    drawer: true,
    tab: [
      {
        name: "Blog",
        value: "Blog",
      },
      {
        name: "About",
        value: "About",
      },
      {
        name: "Skill",
        value: "Skill",
      },
    ],
  }),
  methods: {
    selectTab(name) {
      this.$emit("getSelectTab", (name));
    },
    showNav() {
      this.$emit("showNav", (this.isvisible = !this.isvisible));
    },
  },

  //使用 $emit派发事件
};
</script>