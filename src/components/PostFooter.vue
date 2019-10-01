<template>
  <div class="footer-wrap">
    <!-- 普通页脚 -->
    <div class="footer" v-show="!isFocus">
      <input type="text" placeholder="写跟帖" @focus="handleFocus" />

      <span class="comment">
        <em>{{post.comment_length}}</em>
        <i class="iconfont iconpinglun-"></i>
      </span>

      <!-- 收藏功能 -->
      <i
        class="iconfont iconshoucang"
        :class="{star_active:post.has_star}"
        @click="$emit('handleStar')"
      ></i>

      <i class="iconfont iconfenxiang"></i>
    </div>
    <!-- 输入评论页脚,这里是显示隐藏必须用v-show,原因是为了获得textarea的元素 -->
    <div class="footer-comment" v-show="isFocus">
      <textarea rows="3" ref="textarea" @blur="isFocus = false" :autofocus="isFocus"></textarea>
      <span>发送</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false
    };
  },
  props: ["post"],
  methods: {
    handleFocus() {
      this.isFocus = true;
    }
  }
};
</script>

<style scoped lang="less">
.footer-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px #eee solid;
  padding: 0 10px;
  box-sizing: border-box;

  .footer-comment {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: #fff;
    textarea {
      width: 260 / 360 * 100vw;
      background: #eee;
      padding: 10px;
      box-sizing: border-box;
      border: none;
      border-radius: 8px;
      resize: none;
    }

    span {
      font-size: 12px;
      background: red;
      width: 60 / 360 * 100vw;
      height: 26 / 360 * 100vw;
      line-height: 26 / 360 * 100vw;
      color: #fff;
      text-align: center;
      border-radius: 50px;
    }
  }

  .footer {
    height: 60 / 360 * 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background: #fff;
    input {
      border: none;
      background: #eee;
      border-radius: 50px;
      width: 50%;
      height: 33 / 360 * 100vw;
      font-size: 12px;
      text-indent: 1em;
    }

    .comment {
      display: block;
      position: relative;
      em {
        position: absolute;
        display: block;
        background: red;
        border-radius: 50px;
        color: #fff;
        padding: 0 5px;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
        left: 0px;
        top: -5px;
      }
    }
    .iconfont {
      font-size: 24px;
    }
  }
  .star_active{
    color: red;
  }
}
</style>