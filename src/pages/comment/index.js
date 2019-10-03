import HeaderNormal from "@/components/HeaderNormal"
//评论楼层组件
import CommentFloor from "@/components/CommentFloor"
//页面发布评论的底部
import PostFooter from "@/components/PostFooter"





export default {
    data() {
        return {
            // 文章列表
            comments: [],
            //文章的详情
            detail: {},
            // 保存点击回复的评论
            replyComment:null
        }
    },

    // 注册组件
    components: {
        HeaderNormal,
        CommentFloor,
        PostFooter,

    },
    methods: {
        //请求评论的列表
        getComments(id) {
            // 请求文章列表
            this.$axios({
                url: "/post_comment/" + id
            }).then(res => {
                let { data } = res.data
                // console.log(res.data)
                this.comments = data
                // console.log(this.comments)
            })
        },
        handleReply(item){
            // console.log(item)
            this.replyComment = item
        }
    },
    mounted() {
        // 文章id
        // console.log(this.$route.params)
        let { id } = this.$route.params

        //请求评论的列表,调用
        this.getComments(id)

        // 文章详情
        let config = {
            url: "/post/" + id
        }

        let token = localStorage.getItem("token")

        if (token) {
            config.headers = {
                Authorization: token
            }
        }

        this.$axios(config).then(res => {
            let {
                data
            } = res.data

            this.detail = data
            // console.log("1231",this.detail)
        })
    },
}