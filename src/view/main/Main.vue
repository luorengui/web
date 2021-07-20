<template>
  <v-main>
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
  </v-main>
</template>

<script>
export default {
  name: "Main",
  props: ["selectTab"],
  created() {
    console.log(this.selectTab, "www");
  },
  data: () => ({
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
  methods: {},
};
</script>

