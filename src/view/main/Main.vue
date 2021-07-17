<template>
    <v-main>
      
      <v-container fluid>
        {{selectTab}}
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>

    </v-main>
</template>

<script>
export default {
  name: "Main",
  props:["selectTab"],
  created(){
    console.log(this.selectTab,"www");  
  },
  data: () => ({}),
  methods: {},
};
</script>

