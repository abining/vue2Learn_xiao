import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import TypeNav from "@/components/TypeNav";
import Pagination from "@/components/Pagination";
import "@/mock/mockServe";
// import { reqCategoryList } from './api';
import store from "@/store";
// //上两条和下一条都只是测试一下。
// reqCategoryList()
import "swiper/css/swiper.css"
Vue.component(TypeNav.name,TypeNav);
Vue.component("Pagination",Pagination);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //配置全局时间总线：￥bus
  beforeCreate(){
    Vue.prototype.$bus=this;
    // console.log(this)
  },
  router,
  store,
}).$mount('#app')
