<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer.isVisable"
      app
      :width="width"
      :value="true"
      absolute
      temporary

    >
    </v-navigation-drawer>
</v-card>
</template>

<script>
export default {
  name: "Navigation",
  props: ["drawer"],
  
  data: () => ({
    width:"12%",
    isvisible:true,
  }),
  methods: {

  },
};
</script>