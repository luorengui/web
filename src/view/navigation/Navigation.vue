<template>
  <v-card>
    <v-navigation-drawer
      v-model="isvisable"
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
  props: ["isvisable"],
  data: () => ({
    width:"12%",
    loading: false,
  }),
  methods: {},
};
</script>