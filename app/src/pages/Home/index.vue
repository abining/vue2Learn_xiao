<template>
  <div>
    <TypeNav/>
    <Listcontainer></Listcontainer>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <!-- <Floor/> -->
    <Bannd/>
  </div>
  
</template>

<script>
import Listcontainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor";
import Bannd from "@/pages/Home/Brand";
import { mapState } from 'vuex'
// import
export default {
  
  components:{
        Listcontainer,
        Recommend,
        Rank,
        Like,
        Floor, 
        Bannd,
    },
    mounted(){
      this.$store.dispatch("getFloorList");
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }

}
</script>
   
<style>

</style>