<template>
  <div>
    <div class="profile">
      <!-- $axios.defaults.baseURL读取axios的服务器路径 -->
      <img :src="profile.head_img" alt />

      <div class="profile_center">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>
          {{profile.nickname}}
        </div>
        <div class="time">2019-09-24</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>

    <!-- 通用条形 -->
    <CellBar label="我的关注" text="关注的用户" />
    <CellBar label="我的跟帖" text="跟帖/回复" />
    <CellBar label="我的收藏" text="文章/视频" />
    <CellBar label="退出登录" @click="handleLogout" />
  </div>
</template>

<script>
import CellBar from "@/components/CellBar";
export default {
  data() {
    return {
      profile:{}
    };
  },
  components: {
    CellBar
  },
  methods:{
    //退出登录
    handleLogout(){
      // 清除本地的token和id
      localStorage.removeItem("token");
      localStorage.removeItem("user_id")

      //replace替换上一个页面
      this.$router.replace("/login")
    }
  },
  mounted() {
    // //设置单页背景颜色
    // document.body.style.backgroundColor = "#f2f2f2"
    // 请求个人资料的接口
    this.$axios({
      url: "/user/" + localStorage.getItem("user_id"),
      //添加头像信息
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      console.log("456", res);
      let {data} = res.data;

      if(data){
        // 保存到data
        this.profile = data

        //如果用户有头像
        if(data.head_img){
          this.profile.head_img = this.$axios.defaults.baseURL + data.head_img;
        }else{
          this.profile.head_img = "./static/default_bili.jpg"
        }
      }
    });
  }
};
</script>

<style scoped lang="less">
.profile {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #e4e4e4 solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile_center {
    flex: 1;
    padding: 0 20px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #a0a0a0;
    font-size: 14px;
    margin-top: 5px;
  }

  span {
    color: #a0a0a0;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>