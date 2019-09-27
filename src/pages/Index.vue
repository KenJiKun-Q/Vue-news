<template>
  <div>
    <!-- 红色头部模块 -->
    <div class="header">
      <!-- 左边图标 -->
      <span class="iconfont iconnew logo"></span>
      <!-- 中间搜索模块 -->
      <div class="header-search">
        <span class="iconfont iconsearch ico-search"></span>
        <i>搜索新闻</i>
      </div>
      <!-- 右边个人中心图标 -->
      <router-link to="/personal">
        <span class="iconfont iconwode personal"></span>
      </router-link>
    </div>

    <!-- 栏目列表 -->
    <!-- v-model: 默认选中的标签栏 -->
    <!-- sticky: 配置粘性布局 -->
    <!-- swipeable: 滑动切换 -->
    <van-tabs v-model="active" sticky swipeable>
      <van-tab v-for="(item,index) in categories"
       :title="item.name"
       :key="index">
        <!-- v-model列表是否有加载 -->
        <!-- finished是否加载完毕 -->
        <!-- load底部触发的事件 -->
        <!-- immediate-check 禁止list立即出发onload -->
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <PostCard v-for="(item,index) in item.posts"
           :key="index" 
           :post="item" />
        </van-list>

      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import PostCard from "@/components/PostCard";

export default {
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
      this.onLoad()
    }
  },
  components: {
    PostCard
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        console.log("已经滚动到底部");

        let category = this.categories[this.active]
        // console.log(this.categories)

        // 请求文章列表
        this.$axios({
          url:`/post?category=${this.cid}&pageIndex=${category.pageIndex}&pageSize=${this.pageSize}`
        }).then(res => {
          let {data} = res.data

             // 没有更多的数据了
             if(data.length < this.pageSize){

               category.finished = true

             }

             //默认赋值给头条的列表
             category.posts = [
               ...category.posts,
               ...data
             ]

            //  页面加一
            category.pageIndex++;

            //告诉onload事件这次数据已经加载完毕,下次可以继续
            category.loading = false
        })

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
      let { data } = res.data;
      // console.log(res.data)
      //循环栏目中每一项都添加四个独立的属性
      let newData = []
      data.forEach(v => {
        v.posts = [];
        v.loading = false;
        v.finished = false;
        v.pageIndex = 1;
        newData.push(v)
      })


      // 保存列巴数据到categories
      this.categories = newData;
      
      // 必须要先等待栏目请求完毕，再请求文章列表
      this.$axios({
        url: `/post?category=${this.cid}&pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
      }).then(res => {
          let {data} = res.data

          //默认赋值给头条的列表
        this.categories[this.active].posts = data
        // console.log(this.posts)

        // 页数+1
        this.categories[this.active].pageIndex++;
      })
    
    });
  }
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50 / 360 * 100vw;
  background-color: #ff0000;
  .logo {
    font-size: 54 / 360 * 100vw;
    color: #fff;
  }
  .personal {
    font-size: 25px;
    color: #fff;
  }
  .header-search {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    height: 33 / 360 * 100vw;
    margin: 0 20px;
    border-radius: 50px;
    color: #fff;
    .ico-search {
      margin-right: 5px;
      font-size: 18px;
    }
    i {
      font-size: 14px;
    }
  }
}
/deep/ .van-tabs__nav {
  background: #f6f6f6;
}

/deep/.van-tabs__line {
  width: 42px !important;
  height: 2px;
}
</style>