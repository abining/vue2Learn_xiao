<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
   
  
  </div>
</template>

<script>
import { computed } from "vue";
import Footer from "./components/Footer/index.vue";
import Header from "./components/Header/index.vue";
import Swiper from "swiper";


export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  mounted(){
    this.$store.dispatch("categoryList");

  }

}
</script>


