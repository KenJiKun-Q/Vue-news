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
      <van-tab v-for="(item,index) in categories" :title="item.name" :key="index">
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
          <PostCard v-for="(item,index) in item.posts" :key="index" :post="item" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import config from "./index.js"

export default config
</script>

<style scoped lang="less">
  @import url("./index.less");
</style>