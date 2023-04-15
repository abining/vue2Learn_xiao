<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event"   @mousemove="handler"></div>
    <div class="big" ref="big">
      <img :src="imgObj.imgUrl" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
//引入轮播图的包，接下来就是实例化它，并且传入div的类名，或者该dom
import swiper from 'swiper';
  export default {
    name: "Zoom",
    props:["skuImageList"]
    ,
    data(){
      return {
        currentIndex:0,
        
      }
    },
    methods:{
      handler(event){
        let mask=this.$refs.mask;
        let big=this.$refs.mask;
        // console.log(event)
        let left=event.offsetX-mask.offsetWidth/2;
        let top= event.offsetY-mask.offsetHeight/2;
        mask.style.left=left+'px';
        mask.style.top=top='px';
      }
    },
    computed:{
      
      imgObj(){
        if(this.skuImageList){
          // return this.skuImageList[this.currentIndex];
          return this.skuImageList[this.currentIndex]||{};
        }
        else return {}
      }
    },
    mounted(){
      // console.log(this.skuImageList);
      this.$bus.$on('getIndex',(index)=>{
        // console.log(index,typeof(index));
        this.currentIndex=index;
        // 注意：等号的问题，双等号不等于单等号。2，注意绑定的
        
      })
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>