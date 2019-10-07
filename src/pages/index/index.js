import PostCard from "@/components/PostCard";


export default {
    name:"index",
    data() {
        return {
            //当前默认的栏目,没有登录是0,有登录为1,最终的效果是为了默认显示头条
            //随着栏目的切换而变化
            active: localStorage.getItem("token") ? 1 : 0,
            //栏目列表
            categories: [],
            // 栏目id
            cid: 999,
            //默认的头条文章列表
            //posts: [],
            // 是否在加载,加载完毕后需要手动设置false
            //loading: false,
            // 是否有更多的数据,如果加载完所有的数据,就改为true
            //finished: false,

            //分页的变量
            pageIndex: 1,
            // 每页加载的条数
            pageSize: 6
        };
    },
    watch: {
        active() {
            this.cid = this.categories[this.active].id;
            // console.log(this.cid)
            //切换栏目的时候加载当前栏目的数据
            this.onLoad();
        }
    },
    components: {
        PostCard
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                console.log("已经滚动到底部");

                let category = this.categories[this.active];
                // console.log(this.categories)

                // 请求文章列表
                this.$axios({
                    url: `/post?category=${this.cid}&pageIndex=${category.pageIndex}&pageSize=${this.pageSize}`
                }).then(res => {
                    let {
                        data
                    } = res.data;

                    // 没有更多的数据了
                    if (data.length < this.pageSize) {
                        category.finished = true;
                    }

                    //默认赋值给头条的列表
                    category.posts = [...category.posts, ...data];

                    //  页面加一
                    category.pageIndex++;

                    //告诉onload事件这次数据已经加载完毕,下次可以继续
                    category.loading = false;
                });
            }, 500);
        }
    },
    mounted() {
        //登录之前没有数据存入
        let config = {
            url: "/category"
        };
        // console.log(config)

        //是否存在token,如果有就给头部加上token验证
        if (localStorage.getItem("token")) {
            config.headers = {
                Authorization: localStorage.getItem("token")
            };
        }
        //请求栏目的数据
        this.$axios(config).then(res => {
            // console.log(config)
            // console.log(res.data)
            let {
                data
            } = res.data;
            // console.log(res.data)
            //循环栏目中每一项都添加四个独立的属性
            let newData = [];
            data.forEach(v => {
                v.posts = [];
                v.loading = false;
                v.finished = false;
                v.pageIndex = 1;
                newData.push(v);
            });

            // 保存列巴数据到categories
            this.categories = newData;

            // 必须要先等待栏目请求完毕，再请求文章列表
            this.$axios({
                url: `/post?category=${this.cid}&pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
            }).then(res => {
                let {
                    data
                } = res.data;

                //默认赋值给头条的列表
                this.categories[this.active].posts = data;
                // console.log(this.posts)

                // 页数+1
                this.categories[this.active].pageIndex++;
            });
        });
    }
};