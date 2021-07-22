<template>
  <v-main>
    <!--  tab 栏 -->
    <v-row class="row">
      <v-col>
        <v-tabs v-model="tab" centered>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in tabs" :key="item.name">
            {{ item.value }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <!-- 主内容 -->
    <v-row>
       <!--主内容  文章页 -->
      <v-col cols="8">
        <v-container>
          <v-row dense>
            <template v-for="n in 6">
              <v-col :key="n" cols="4">
                <Card></Card>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-col>
      <!--主内容  侧边栏 -->
      <v-col cols="4" class="right-nav">
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-divider vertical></v-divider>
            </v-col>
            <v-col cols="8">
              <v-card class="mx-auto my-5">
                <v-card-title>标签</v-card-title>
                <v-card-text>
                  <template v-for="n in 6">
                    <v-chip class="ma-2" label :key="n"> 默认 </v-chip>
                  </template>
                </v-card-text>
              </v-card>

              <v-card class="mx-auto my-5">
                <v-card-title>最热</v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item-group v-model="blog" color="primary">
                      <v-list-item
                        v-for="(blog, i) in blogs"
                        :key="i"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="blog.title"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    
    <!-- 分页 -->
    <v-row>
      <v-col>
        <div class="text-center">
          <v-pagination v-model="page" :length="6"></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-main>
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
    tabs: [
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
    blog: 5,
    blogs: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
.lighten-5 {
  width: 100%;
  float: left;
}
.right-nav {
  float: left;
}
</style>