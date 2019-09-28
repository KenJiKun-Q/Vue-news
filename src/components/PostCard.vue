<template>
  <div>
    <!-- 单张图片 -->
    <div class="card" v-if="post.cover.length > 0 && post.cover.length < 3 && post.type === 1">
      <!-- 左边文字 -->
      <div class="card-left">
        <div class="post-title">
          <router-link :to="`/post_detail/${post.id}`">{{post.title}}</router-link>
        </div>
        <p class="post-info">
          <span>{{post.user.nickname}}</span>
          <span>{{post.comment_length}}跟帖</span>
        </p>
      </div>

      <!-- 右边图片 -->
      <div class="card-img">
        <router-link :to="`/post_detail/${post.id}`">
          <img :src="post.cover[0].url" alt />
        </router-link>
      </div>
    </div>

    <!-- 多张图片排局 -->
    <div class="img-cart" v-if="post.cover.length >= 3">
      <div class="post-title">
        <router-link :to="`/post_detail/${post.id}`">{{post.title}}</router-link>
      </div>
      <router-link :to="`/post_detail/${post.id}`">
        <div class="img-list">
          <img v-for="(item,index) in post.cover" :key="index" :src="item.url" v-if="index < 3" />
        </div>
      </router-link>
    </div>

    <!-- 视频文章布局 -->
    <div class="video-cart" v-if="post.type === 2 && post.cover.length === 1">
      <div class="post-title">
        <router-link :to="`/post_detail/${post.id}`">{{post.title}}</router-link>
      </div>
      <router-link :to="`/post_detail/${post.id}`">
        <div class="video">
          <img :src="post.cover[0].url" />
          <span class="video-layer">
            <i class="iconfont iconshipin"></i>
          </span>
        </div>
      </router-link>
      <p class="post-info">
        <span>{{post.user.nickname}}</span>
        <span>{{post.comment_length}}跟帖</span>
      </p>
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
      line-height: 1.5;
      font-size: 14px;
      margin-right: 5px;
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
  .img-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    img {
      display: flex;
      width: 33%;
      height: 80 / 360 * 100vw;
      object-fit: cover;
    }
  }
  .post-info {
    font-size: 12px;
    color: #999;
  }
}

.video-cart {
  padding: 15px 10px;
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
  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 5px;
    img {
      width: 340 / 360 * 100vw;
    }
    .video-layer {
      display: flex;
      position: absolute;
      width: 50 / 360 * 100vw;
      height: 50 / 360 * 100vw;
      background-color: rgba(0, 0, 0, 0.3);
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 50%;
      i {
        font-size: 34px;
        color: #fff;
      }
    }
  }
  .post-info {
    font-size: 12px;
    color: #999;
  }
}
</style>