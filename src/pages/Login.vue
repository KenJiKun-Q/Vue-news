<template>
  <div class="container">
    <!-- 关闭按钮 -->
    <div class="close">
      <span class="iconfont iconfont-test"></span>
    </div>

    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- 用户名 -->
    <AuthInput placeholder="手机号" :value="form.username" @input="handleUsername"></AuthInput>
    <!-- 密码 -->
    登录按钮
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
// 导入输入框组件
import AuthInput from "@/components/AuthInput";

export default {
  data() {
    return {
      //发送给后台的数据
      form: {
        username: "",
        password: ""
      }
    };
  },
  //注册组件
  components: {
    AuthInput
  },

  methods: {
    handleUsername(value) {
      // console.log(value)
      this.form.username = value;
    },

    handleSubmit() {
      console.log(this.form);
    }
  }
};
</script>


<style scoped lang="less">
// scoped 代表作用域样式
// lang 声明样式的类型
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}
</style>