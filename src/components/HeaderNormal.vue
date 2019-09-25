<template>
<!-- 个人中心页面模块的头部 -->
  <div class="header">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <h4>{{title}}</h4>
      <span>></span>
  </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style scoped lang="less">
    .header{
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        
        span{
            display: block;
        }

        span:last-child{
            opacity: 0;
        }
    }
</style>