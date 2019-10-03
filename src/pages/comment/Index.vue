<template>
  <div class="container">
    <!-- 公共头部组件 -->
    <HeaderNormal title="精彩跟帖" />

    <!-- 评论模块 -->
    <div class="comment"
    v-for="(item,index) in comments"
    :key="index"
    >
      <div class="comment-info">
        <!-- 左边的用户信息 -->
        <div class="comment-user">
          <!-- 头像 -->
          <img :src="$axios.defaults.baseURL + item.user.head_img" v-if="item.user.head_img">
          <img src="../../../static/default_bili.jpg" v-else/>
          <!-- 用户名字 -->
          <div class="user-info">
            <p>{{item.user.nickname}}</p>
            <span>1分钟前</span>
          </div>
        </div>

        <span class="reply" @click="handleReply(item)">回复</span>
      </div>

     <CommentFloor
      v-if="item.parent"
       :data="item.parent"/>

      <div class="comment-content">
        {{item.content}}
        </div>
    </div>

    <!-- 页脚组件 -->
    <!-- post文章的详情
    replyComment：要回复的评论
    getComments：发布评论成功后重新请求评论的列表 -->
    <PostFooter 
    :post="detail" 
    :replyComment="replyComment"
    @getComments="getComments" />
  </div>
</template>

<script>
import config from "./index.js";

export default config;
</script>

<style scoped lang="less">
@import url("../comment/index.less");
</style>