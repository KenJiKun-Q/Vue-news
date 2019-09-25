<template>
  <div>
      <!-- 头部 -->
      <HeaderNormal title="编辑资料" />

      <!-- 头像 -->
      <div class="head">
          <img :src="profile.head_img" alt="">
      </div>

      <!-- 调用条形组件 -->
      <CellBar label="昵称" :text="profile.nickname"/>

      <CellBar label="密码" :text="profile.password" type="password"/>

      <CellBar label="性别" :text="profile.gender === 1 ? '男' : '女'"/>
  </div>
</template>

<script>
// 导入头部组件
import HeaderNormal from "@/components/HeaderNormal"
//导入条形组件
import CellBar from "@/components/CellBar"

export default {
    data(){
        return{
            //用户详情
            profile:{}
        }
    },
    components:{
        HeaderNormal,
        CellBar,
    },
    mounted(){
        //请求个人资料接口
        this.$axios({
            //获取本地存储中的id
            url:"/user/" + localStorage.getItem("user_id"),
            // 添加头信息
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(res=>{
            // console.log(res.data)
            let {data} = res.data
            // console.log(data)
            if(data){
                //将data数据保存到profile
                this.profile = data
                // console.log(this.profile)
                //判断如果用户有头像
                if(data.head_img){
                    // 有头像就使用头像
                    this.profile.head_img = this.$axios.defaults.baseURL + data.head_img
                }else{
                    // 没有就使用默认
                    this.profile.head_img = "./static/default_bili.jpg"
                }
            }
        })
    }
}
</script>

<style scoped lang="less">
    .head{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;

        img{
            display: block;
            width: 100 / 360 * 100vw;
            height: 100 / 360 * 100vw;
            border-radius: 50%;
        }
    }
</style>