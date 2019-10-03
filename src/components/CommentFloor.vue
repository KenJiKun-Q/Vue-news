<template>
  <div>
     <!-- 自己再次在这个位置调用自己 -->
    <comment v-if="data.patent" :data="data.parent"></comment>
    <!-- 评论楼层的组件 -->
    <div class="comment-floor">
      <div class="floor-header">
        <span>{{data.user.nickname}}</span>
        <i>1分钟前</i>
        <em>回复</em>
      </div>

      <div class="comment-content">{{data.content}}</div>
    </div>

   
  </div>
</template>

<script>
export default {
  // 组件的名字，单纯的针对当前的组件命名，当前的组件可以通过该名字自己调用自己
  name: "comment",
  props: ["data"]
};
</script>

<style scoped lang="less">
.comment-floor {
  padding: 15px;
  border: 1px solid #d7d7d7;
  margin-bottom: 15px;
    
  .floor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 15px;
    }

    i {
      flex: 1;
      font-size: 12px;
      margin-left: 10px;
      color: #999;
    }

    em {
      font-size: 12px;
      color: #999;
    }
  }

  .comment-content {
    margin-top: 15px;
    font-size: 16px;
  }
}
</style>