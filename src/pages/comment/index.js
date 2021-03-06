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
            replyComment:null,

            loading:false,
            finished:false,
            pageIndex:1,
            pageSize:5,
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
        getComments(id,isReply) {


            if(isReply === "isReply"){
                this.pageIndex = 1;
                this.comments = []
            }

            // 请求文章列表
            this.$axios({
                // 条数默认是10
                url: `/post_comment/${id}?pageIndex=${this.pageIndex}`,
            }).then(res => {
                let { data } = res.data
                // console.log(data)
                //覆盖评论的列表
                this.comments = [...this.comments,...data];

                // 请求完毕需要手动变为false
                this.loading = false;

                if(data.length < this.pageSize){
                    this.finished = true;
                    return;
                }

                // 页数加1
                this.pageIndex++;
            })
        },
        handleReply(item){
            // console.log("1",item)
            this.replyComment = item
        },
        // 评论加载更多
        onLoad(){
            setTimeout(()=>{
                //文章的id
                let {id} = this.$route.params
                // 请求下一页的数据
                this.getComments(id)
            },1000)
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