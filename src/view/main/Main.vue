<template>
  <v-content class="blog-content">
    <v-tabs v-model="tab" centered>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item.name">
        {{ item.value }}
      </v-tab>
    </v-tabs>
    <!-- 内容 -->
    <v-container>
      <v-row dense>
        <template v-for="n in 8">
          <v-col :key="n">
            <Card></Card>
          </v-col>
          <v-responsive
            v-if="n === 4"
            :key="`width-${n}`"
            width="100%"
          ></v-responsive>
        </template>
      </v-row>
    </v-container>

    <!-- 侧边栏 -->

    <!-- 分页 -->
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-content>
</template>

<script>
import Card from "./componet/card.vue";

export default {
  components: {
    Card,
  },
  name: "Main",
  props: ["selectTab"],
  created() {
    console.log(this.selectTab, "www");
  },
  data: () => ({
    page: 1,
    tab: null,
    items: [
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
  methods: {},
};
</script>

<style scoped>
.blog-content {
  margin: 0 0 0 10%;
  width: 70%;

}
</style>