import requests from "./request";
import requestMock from "./requestMock";
export const reqCategoryList = ()=>{
    return requests({
        url:"/product/getBaseCategoryList",
        method:"get"
    })
}
export const reqBannerList = ()=>{
    return requestMock({
        url:"/banner",
        method:"get"
    })
}
export const reqFloorList=()=>{
    return requestMock({
        url:"/floor",
        method:"get",
    })
}
//获取搜索模块的数据。

//要素：1，请求地址，2，请求方式。3，是否需要带参数。
export const reqGerSearchInfo= (params)=>{
    return requests({
        url:"/list",
        method:"post",
        data: params,
    })
}
export const reqGoodsInfo=(skuId)=>requests({
    url:`item/${skuId}`,method:"get"
});
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:"post",
    })
}
export const reqGetCode=(phone)=>{
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'get',

    })
}
export const reqUserRegister = (data)=>requests({
    url:"/user/passport/register",
    data,
    method:"post",
})