<template>
  <v-container fluid>
    <v-navigation-drawer
      v-model="drawer.isvisable"
      app
      :width="width"
      :value="true"
      stateless
    >

    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["drawer"],
  data: () => ({
    width:"12%",
    loading: false,
  }),
  methods: {},
};
</script>