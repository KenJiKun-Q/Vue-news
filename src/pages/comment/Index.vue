<template>
  <div>
    <!-- 公共头部组件 -->
    <HeaderNormal title="精彩跟帖" />

    <!-- 评论模块 -->
    <div class="comment">
      <div class="comment-info">
        <!-- 左边的用户信息 -->
        <div class="comment-user">
          <!-- 头像 -->
          <img src="../../../static/default_bili.jpg" />
          <!-- 用户名字 -->
          <div class="user-info">
            <p>比利王</p>
            <span>1分钟前</span>
          </div>
        </div>

        <span class="reply">回复</span>
      </div>

      <!-- 评论楼层 -->
      <div class="comment-floor">
        <div class="floor-header">
          <span>1 水星网友</span>
          <i>1分钟前</i>
          <em>回复</em>
        </div>

        <div class="comment-content">
          是考虑到即可拉伸
        </div>
      </div>

      <div class="comment-content">
        是考虑到即可拉伸
      </div>
    </div>

  </div>
</template>

<script>
import config from "./index.js";

export default config;
</script>

<style scoped lang="less">
@import url("../comment/index.less");
</style>