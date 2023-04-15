
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/detail";
//路由配置信息。
export default [
        {
           path:"/Detail/:skuId",
          component:Detail,
          meta:{show:true}
        },
       {
          path:"/Home",
          component:Home,
          meta:{show:true}
  
       },
       {
          path:"/Login",
          component:Login,
          meta:{show:true}
  
       },
       {
          path:"/Register",
          component:Register,
          meta:{show:false}
       },
       {
        name:"search",
          path:"/Search/:keyWord?",
          component:Search,
          meta:{show:true}
  
       },
       {
        //重新定向。
        path:"/",
        redirect:"/Home"
       }
      ]
