import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
//user插件。
Vue.use(VueRouter);
//重写push和replace方法。
let originPush=VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push=function(location,resolve,reject){
   if(resolve&&reject){
      originPush.call(this,location,resolve,reject);
   }
   else{
      originPush.call(this,location,()=>{},()=>{});
   }
}
VueRouter.prototype.replace=function(location,resolve,reject){
   if(resolve&&reject){
      originReplace.call(this,location,resolve,reject);
   }
   else{
      originReplace.call(this,location,()=>{},()=>{});
   }
}

export default new VueRouter({
    routes,
    //滚动行为。
    scrollBehavior(){
      return {y:0};
    }
})
