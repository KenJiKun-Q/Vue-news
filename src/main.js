import Vue from "vue"
//路由 1.导入路由构造函数
import VueRouter from "vue-router"

//导入vant-ui组件
import vant from 'vant'
import { Toast } from 'vant'

//导入axios
import axios from "axios"

//导入app.vue
import App from "./App.vue"
import Login from "@/pages/Login"
import Register from "@/pages/Register"

//把axios挂载到原型
Vue.prototype.$axios = axios   //this.$axios

//基准路径,以后每次请求都自动在前面加上改路径
axios.defaults.baseURL = "http://127.0.0.1:3000"


//在.vue文件中药使用router-link或者router-view需要注册下插件
Vue.use(VueRouter)
Vue.use(vant)



//路由 2.创建路由配置
const routes = [
    // { path:"/",component: Login },
    { path:"/login",component: Login },
    { path:"/register" ,component: Register }

]

// 路由3.创建对象实例
const router = new VueRouter({
    routes
})

//axios的统一的拦截器,拦截响应
//固定的声明
axios.interceptors.response.use( res => {
    //拦截响应，做统一处理 
    let { message,statusCode } = res.data
    // console.log( message )
    console.log(message)

    if(statusCode === 401 ){
        Toast.fail(message)
    }

    return res

})

new Vue({
    el: "#app",

    //路由: 4.挂载根实例
    router,

    //指定一个组件渲染根实例,这个组件可以成为最低成的组件
    render(createElement) {
        // render函数是一个固定的写法,只有app是可变的
        return createElement(App)
    }
})