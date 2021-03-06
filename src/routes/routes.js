import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Personal from "@/pages/Personal"
import EditProfile from "@/pages/EditProfile"
import UserFollow from "@/pages/UserFollow"
import UserComment from "@/pages/UserComment"


import Index from "@/pages/index/Index.vue"
import PostDetail from "@/pages/PostDetail"
import Comment from "@/pages/comment/Index.vue"
import Search from "@/pages/Search.vue"


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
    { path:"/post_comment/:id" ,component: Comment },
    { path:"/search" ,component: Search },

]

export default routes ;