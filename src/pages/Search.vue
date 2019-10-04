<template>
  <div class="container">
    <div class="header">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="input-wrap">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="keyword" placeholder="搜索关键字" />
      </div>

      <span class="search-btn" @click="handleSearch">搜索</span>
    </div>

    <div class="list">
        <!-- 调用首页用过的文章模块zujian -->
        <PostCard
        v-for="(item,index) in list"
        :key="index"
        :post="item"
         />
    </div>
  </div>
</template>

<script>
//文章列表的组件
import PostCard from "@/components/PostCard"

export default {
    data(){
        return{
            // 搜索关键字
            keyword:"",
            // 文章的列表
            list:[]
        }
    },
     components:{
        PostCard
    },
    methods:{
        handleSearch(){
            this.$axios({
                url:`/post_search?keyword=${this.keyword}`
            }).then(res=>{
                let {data} = res.data

                this.list = data
            })
        }
    },
   
};
</script>

<style scoped lang="less">
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60/ 360 * 100vw;
        padding: 0 15px;
        box-sizing: border-box;
        
        .input-wrap{
            position: relative;
            flex: 1;
            margin:  0 10px;
            .iconsearch{
                position: absolute;
                left: 10px;
                top: 12 / 360 * 100vw;
            }

            input{
                width: 100%;
                display: block;
                height: 40 / 360 * 100vw;
                border-radius: 50px;
                padding: 0 15px 0 30px;
                font-size: 12px;
                box-sizing: border-box;
                border: 1px solid #ddd;
            }
        }

        .search-btn{
            font-size: 14px;
        }
    }
</style>