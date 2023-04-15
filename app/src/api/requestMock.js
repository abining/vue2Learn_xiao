import axios from "axios"
import nprogress from "nprogress";
import "nprogress/nprogress.css"
const request=axios.create({
    baseURL:"/mock",
    timeout:5000,
    
})
//暂时没有加入请求和响应拦截器。
//请求拦截器
request.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
})
//响应拦截器
request.interceptors.response.use(
    (res)=>{
        nprogress.done();
        return res.data
    },
    (error)=>{
        return Promise.reject(new Error('faile'));
    }
    )
export default request;