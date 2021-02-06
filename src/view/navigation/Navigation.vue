<template>
  <v-container fluid>
    <v-navigation-drawer
      v-model="drawer.isvisable"
      app
      :width="width"
      :value="true"
      stateless
    >
      <v-list>
        <v-list-item>
          <!-- 我的信息 -->
          <v-card class="mx-auto" max-width="450">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              :aspect-ratio="16 / 9"
            >
            </v-img>
            <v-card-title>
              <div class="display-1 mb-2">name</div>
            </v-card-title>
            <v-card-title>
              <div class="title font-weight-regular grey--text">time</div>
            </v-card-title>
            <v-row class="px-4 grey--text" align="center">
              <v-avatar size="24" class="mr-4">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                  contain
                ></v-img>
              </v-avatar>

              <span>天气</span>
            </v-row>
            <!-- 分割线 -->
            <v-divider class="mt-6 mx-4"></v-divider>

            <v-card-text>
              <v-container class="py-0">
                <v-row align="center" justify="start">
                  <v-col
                    v-for="selection in tags"
                    :key="selection.text"
                    class="shrink"
                  >
                    <v-chip :disabled="loading">
                      <v-icon left v-text="selection.icon"></v-icon>
                      {{ selection.text }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-divider class="mt-6 mx-4"></v-divider>
            <v-list>
              <template v-for="item in items">
                <v-list-item :key="item.text">
                  <v-list-item-avatar>
                    <v-icon :disabled="loading" v-text="item.icon"></v-icon>
                  </v-list-item-avatar>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
            <v-divider class="mt-6 mx-4"></v-divider>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["drawer"],
  data: () => ({
    items: [
      {
        text: "个人空间",
        icon: "mdi-nature",
      },
      {
        text: "订阅管理",
        icon: "mdi-glass-wine",
      },
      {
        text: "November",
        icon: "mdi-calendar-range",
      },
      {
        text: "Portland",
        icon: "mdi-map-marker",
      },
      {
        text: "Biking",
        icon: "mdi-bike",
      },
    ],
    tags: [
      {
        text: "足球",
        icon: "mdi-nature",
      },
      {
        text: "电竞",
        icon: "mdi-glass-wine",
      },
      {
        text: "社会热点",
        icon: "mdi-calendar-range",
      },
      {
        text: "篮球",
        icon: "mdi-map-marker",
      },
      {
        text: "技术",
        icon: "mdi-bike",
      },
    ],

    width: 300,
  }),
  methods: {},
};
</script>