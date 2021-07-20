<template>
  <v-card :loading="loading" class="mx-auto my-5" max-width="300">
    <v-img
      height="100"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>Cafe Badilico</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {},
};
</script>
