import Vue from "vue"
//路由 1.导入路由构造函数
import VueRouter from "vue-router"

//导入vant-ui组件
import vant from 'vant'
import { Toast } from 'vant'

//导入axios
import axios from "axios"

//导入app.vue
//登录后的个人中心
import App from "./App.vue"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Personal from "@/pages/Personal"
import EditProfile from "@/pages/EditProfile"
import UserFollow from "@/pages/UserFollow"
import UserComment from "@/pages/UserComment"


// 首页类
import Index from "@/pages/Index"
import PostDetail from "@/pages/PostDetail"

//把axios挂载到原型
Vue.prototype.$axios = axios   //this.$axios

//基准路径,以后每次请求都自动在前面加上改路径
axios.defaults.baseURL = "http://127.0.0.1:3000"


//在.vue文件中药使用router-link或者router-view需要注册下插件
Vue.use(VueRouter)
Vue.use(vant)



//路由 2.创建路由配置
const routes = [
    { path:"/login",component: Login },
    { path:"/register" ,component: Register },
    { path:"/personal" ,component: Personal },
    { path:"/edit_profile" ,component: EditProfile },
    { path:"/user_forllow" ,component: UserFollow },
    { path:"/user_comment" ,component: UserComment },
    { path:"/post_detail/:id" ,component: PostDetail },


    { path:"/" ,component: Index },
    { path:"/post_detail" ,component: PostDetail },

]

// 路由3.创建对象实例
const router = new VueRouter({
    routes
})

//路由守卫,就是一页面跳转之前的拦截器
//to是要跳转之后的页面,去边度
//from跳转之前的页面,系边度黎
//next 必须要调用next()调用才会执行跳转,还可以重定向,next('/login')
router.beforeEach((to,from,next)=>{
    // 判断是否有token
    let hasToken = localStorage.getItem("token")
    // console.log("token",hasToken)

    // 判断是否有权限登录
    if(to.path === "/personal" || to.path === "/edit_profile"){
        //判断本地是否有token
        if(hasToken){
            //有就跳转
            next()
        }else{
            // 没有的话就跳转到登录页面
            next("/login")
        }
    }else{
        //所有人都可以访问的页面正常浏览
        next()
    }
})


//axios的统一的拦截器,拦截响应
//固定的声明
axios.interceptors.response.use( res => {
    //拦截响应，做统一处理 
    let { message,statusCode } = res.data
    // console.log( message )
    // console.log(message)

    if(statusCode === 401 ){
        Toast.fail(message)
    }
//当token过期零,或者token无效,一般引起的原因可能就是token被清空,密码修改
    if(message === "用户信息验证失败"){
        // 跳转到登录
        router.push('/login')
    }

    //必须要返回res
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