<template>
  <div>
    <div class="card" v-if="post.cover.length > 0 && post.cover.length < 3">
      <!-- 左边文字 -->
      <div class="card-left">
        <div class="post-title">{{post.title}}</div>
        <p class="post-info">
          <span>{{post.user.nickname}}</span>
          <span>{{post.comment_length}}跟帖</span>
        </p>
      </div>

      <!-- 右边图片 -->
      <div class="card-img">
        <img :src="post.cover[0].url" alt />
      </div>
    </div>

    <!-- 多张图片排局 -->
    <div class="img-cart" v-if="post.cover.length >= 3">
      <div class="post-title">{{post.title}}</div>
      <div class="img-list">
        <img v-for="(item,index) in post.cover" :key="index" :src="item.url" v-if="index < 3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped lang="less">
.card {
  display: flex;
  padding: 15px 10px 10px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #ccc solid;
  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80 / 360 * 100vw;
    flex: 1;
    .post-title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.4;
      font-size: 14px;
    }
    .post-info {
      font-size: 12px;
      color: #999;
      span {
        margin-right: 10px;
      }
    }
  }

  .card-img {
    img {
      display: block;
      width: 121 / 360 * 100vw;
      height: 75 / 360 * 100vw;
      object-fit: cover;
    }
  }
}

.img-cart {
  padding: 10px 10px;
  border-bottom: 1px solid #ccc;

  .post-title {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .img-list{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    img{
      display: block;
      width: 33%;
      height: 80 / 360 * 100vw;
      object-fit: cover;
    }
  }
  .post-info{
    font-size: 12px;
      color: #999;
  }
}
</style>