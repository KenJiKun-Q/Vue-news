<template>
  <div class="container">
    <!-- 文章的详情页 -->
    <div class="article" v-if="detail.type === 1">
      <div class="header">
        <div class="header_left" @click="$router.back()">
          <span class="iconfont iconjiantou2"></span>
          <span class="iconfont iconnew logo"></span>
        </div>
        <span class="focus" v-if="!detail.has_follow" 
        @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else
         @click="handleUnfollow">已关注</span>
      </div>
      <h3>{{detail.title}}</h3>
      <p class="post-info">{{ detail.user.nickname }}&nbsp;&nbsp;&nbsp;2020-00-00</p>
      <div class="post-content" v-html="detail.content"></div>
    </div>

    <!-- 视频详情内容 -->
    <div class="video-wrap" v-if="detail.type === 2">
      <video
        src="https://video.pearvideo.com/mp4/adshort/20190927/cont-1607446-14434032_adpkg-ad_hd.mp4"
        class="video"
        controls
        poster="https://timgmb04.bdimg.com/timg?searchbox_feed&quality=100&wh_rate=0&size=b576_324&ref=http%3A%2F%2Fwww.baidu.com&sec=1568739067&di=612dd27cae470b93b01a4b32ef72fbac&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe18c6ffa079441431f8988ca4c3ac106.jpeg"
      ></video>

      <span 
      class="iconfont iconjiantou2 video-back"
      @click="$router.back()"></span>

      <div class="video-info">
        <div class="video-user">
          <img :src="$axios.defaults.baseURL + detail.user.head_img" alt />
          <span>{{detail.user.nickname}}</span>
        </div>

        <span class="focus"
         v-if="!detail.has_follow"
         @click="handleFollow">关注</span>
        <span class="focus focus_active" v-else @click="handleUnfollow">已关注</span>
      </div>
    </div>

    <div class="post-btns">
      <!-- 点赞 -->
      <span @click="handleLike" :class="{ like_active: detail.has_like }">
        <i class="iconfont icondianzan"></i>
        {{detail.like_length}}
      </span>
      <span>
        <i class="iconfont iconweixin"></i>
        WeChat
      </span>
    </div>

    <!-- 脚部组件 -->
    <PostFooter :post="detail" @handleStar="handleStar" />
  </div>
</template>

<script>
import PostFooter from "@/components/PostFooter";
import { log } from "util";
export default {
  data() {
    return {
      // 文章的内容
      detail: {
        user: {}
      }
    };
  },
  components: {
    PostFooter
  },
  methods: {
    handleFollow() {
      //   通过id关注用户
      console.log(12);
      this.$axios({
        url: "/user_follows/" + this.detail.user.id,
        //添加头信息
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        let { message } = res.data;
        // console.log(message)
        if (message === "关注成功") {
          this.detail.has_follow = true;

          this.$toast.success(message);
        }
      });
    },
    //取消关注
    handleUnfollow() {
      //   通过id关注用户
      // console.log(123)
      this.$axios({
        url: "/user_unfollow/" + this.detail.user.id,
        //添加头信息
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        let { message } = res.data;
        // console.log(message)
        if (message === "取消关注成功") {
          this.detail.has_follow = false;

          this.$toast.success(message);
        }
      });
    },
    // 点赞
    handleLike() {
      // 通过作者id关注用户
      this.$axios({
        url: "/post_like/" + this.detail.id,
        // 添加头信息
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        const { message } = res.data;

        if (message === "点赞成功") {
          // 修改关注的按钮的状态
          // this.detail.has_like = !this.detail.has_like;
          this.detail.has_like = true;
          this.detail.like_length++;
        }

        if (message === "取消成功") {
          // 修改关注的按钮的状态
          // this.detail.has_like = !this.detail.has_like;
          this.detail.has_like = false;
          this.detail.like_length--;
        }
        this.$toast.success(message);
      });
    },
    //文章收藏
    handleStar() {
      console.log(123);
      // 通过作者id关注用户
      this.$axios({
        url: "/post_star/" + this.detail.id,
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        let { message } = res.data;

        // if(message === "收藏成功"){
        //     this.detail.has_star = true;
        this.detail.has_star = !this.detail.has_star;
        this.$toast.success(message);
        // }
      });
    }
  },
  mounted() {
    //   请求文章的详情
    let { id } = this.$route.params;
    // console.log(id);

    let token = localStorage.getItem("token");
    // 请求配置
    let config = {
      url: "/post/" + id
    };

    //如果有token就带上,才可能获取到是否有关注,是否有收藏的属性
    if (token) {
      config.headers = {
        Authorization: token
      };
    }

    this.$axios(config).then(res => {
      let { data } = res.data;

      //将数据赋值到detail
      this.detail = data;
      console.log(this.detail);
    });
  }
};
</script>

<style scoped lang="less">
.container {
  padding-bottom: 100 / 360 * 100vw;
  box-sizing: border-box;
}
video {
  width: 100%;
}
.video-info {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .video-user {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
  }
  img {
    width: 30 / 306 * 100vw;
    border-radius: 50%;
    margin-right: 10px;
  }
}
.video-wrap {
    position: relative;
  .video-back {
    display: flex;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 5px;
    // background: #000;
  }
}

.focus {
  font-size: 12 / 360 * 100vw;
  border: 1px solid red;
  width: 55 / 360 * 100vw;
  height: 23 / 360 * 100vw;
  line-height: 23 / 360 * 100vw;
  border-radius: 50px;
  background: red;
  color: #fff;
  text-align: center;
}

.focus_active {
  border: 1px #ccc solid;
  color: #333333;
  background: none;
}

.article {
  padding: 0 15px;
  padding-top: 60 / 360 * 100vw;
  //   box-sizing: border-box;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60 / 360 * 100vw;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    background: #fff;

    .header_left {
      * {
        vertical-align: middle;
      }
      .logo {
        font-size: 50 / 360 * 100vw;
        margin-left: 5px;
      }
    }
  }

  h3 {
    margin-bottom: 5px;
  }
  .post-info {
    font-size: 12px;
    color: #999;
  }

  .post-content {
    margin-top: 25px;
    line-height: 1.8;
    /deep/ img {
      width: 100%;
    }
  }
}

.post-btns {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  span {
    height: 30 / 360 * 100vw;
    line-height: 30 / 360 * 100vw;
    border: 1px solid #999;
    border-radius: 50px;
    padding: 0 15px;
    font-size: 13px;
    align-items: center;
  }
  .iconweixin {
    color: #3ad13a;
    font-size: 16px;
  }

  .like_active {
    border: 1px red solid;
    i {
      color: red;
    }
  }
}
</style>