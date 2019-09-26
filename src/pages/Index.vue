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
      <van-tab 
       v-for="(item,index) in categories" 
       :title="item.name" 
       :key="index"
       >
          <PostCard v-for="(item,index) in posts"
          :key="index"
          :post="item"
          />
    </van-tab>
</van-tabs>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard"

export default {
  data(){
    return{
      //当前默认的栏目,没有登录是0,有登录为1,最终的效果是为了默认显示头条
      //随着栏目的切换而变化
      active: localStorage.getItem("token") ? 1 :0,
      //栏目列表
      categories:[],
      // 栏目id
      cid:999,
      //默认的头条文章列表
      posts:[]
    }
  },
  watch:{
    active(){
      this.cid = this.categories[this.active].id
      // console.log(this.cid)
    }
  },
  components:{
    PostCard
  },
  mounted(){
    //登录之前没有数据存入
    let config = {
      url:"/category"
    }
    // console.log(config)

    //是否存在token,如果有就给头部加上token验证
    if(localStorage.getItem("token")){
      config.headers={
        Authorization: localStorage.getItem("token")
      }
    }
    //请求栏目的数据
    this.$axios(config)
    .then(res=>{
      // console.log(res.data)
      let {data} = res.data
      // console.log(res.data)    
      // 保存列巴数据到categories
      this.categories = data
    });

    // 请求文章列表
    this.$axios({
      url:`/post?category=${this.cid}`
    }).then(res =>{
      let{data}= res.data

      //默认赋值给头条的列表
      this.posts = data;
    })
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
/deep/ .van-tabs__nav{
  background: #f6f6f6;
}

/deep/.van-tabs__line{
  width: 42px !important;
  height: 2px;
}
</style>