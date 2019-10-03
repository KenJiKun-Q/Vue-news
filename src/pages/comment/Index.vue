<template>
  <div class="container">
    <!-- 公共头部组件 -->
    <HeaderNormal title="精彩跟帖" />

    <!-- 评论模块 -->
    <!-- v-model：是否在加载
    finished：是否加载完毕
    load：到底部触发加载-->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <div class="comment" v-for="(item,index) in comments" :key="index">
        <div class="comment-info">
          <!-- 左边的用户信息 -->
          <div class="comment-user">
            <!-- 头像 -->
            <img :src="$axios.defaults.baseURL + item.user.head_img" v-if="item.user.head_img" />
            <img src="../../../static/default_bili.jpg" v-else />
            <!-- 用户名字 -->
            <div class="user-info">
              <p>{{item.user.nickname}}</p>
              <span>1分钟前</span>
            </div>
          </div>

          <span class="reply" @click="handleReply(item)">回复</span>
        </div>

        <CommentFloor v-if="item.parent" :data="item.parent" @handleReply="handleReply" />
        <div class="comment-content">{{item.content}}</div>
      </div>
    </van-list>

    <!-- 页脚组件 -->
    <PostFooter
      :post="detail"
      :replyComment="replyComment"
      @handleReply="handleReply"
      @getComments="getComments"
    />
  </div>
</template>

<script>
import config from "./index.js";

export default config;
</script>

<style scoped lang="less">
@import url("../comment/index.less");
</style>