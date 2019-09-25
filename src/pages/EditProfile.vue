<template>
  <div>
      <!-- 头部 -->
      <HeaderNormal title="编辑资料" />

      <!-- 头像 -->
      <div class="head">
          <img :src="profile.head_img" alt="">

          <!-- vant上传组件 -->
          <van-uploader :after-read="afterRead" class="uploader" />
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
    methods:{
        //选择完照片后的回调函数,file返回选中的图片
        afterRead(file){
            //file是上传照片后解析的数据
            // console.log(file)
            //构造表单数据
            let formData = new FormData()
            //通过表单使用append方法追加数量
            formData.append('file',file.file)
            
            // 发起请求
            this.$axios({
                url:"/upload",
                method:'POST',
                //添加头信息
                headers:{
                    Authorization:localStorage.getItem("token"),
                },
                //把表单的数据上传到服务器
                data:formData
            }).then(res=>{
                let {data} = res.data

                //替换用户的资料头像
                this.profile.head_img = this.$axios.defaults.baseURL + data.url;

                //把头像url上传到用户资料
                this.$axios({
                    url:"/user_update/" + localStorage.getItem("user_id"),
                    method:'POST',
                    //添加头信息
                    headers:{
                        Authorization:localStorage.getItem("token")
                    },
                    data:{
                        head_img: data.url
                    }
                }).then(res=>{
                    let {message} = res.data;
                    // console.log(res.data)
                    //成功的窗口提示
                    if(message === '修改成功'){
                        this.$toast.success(message)
                    }
                })
            })
            
        }
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
        position: relative;

        .uploader{
            position: absolute;
            opacity: 0;
        }
        img{
            display: block;
            width: 100 / 360 * 100vw;
            height: 100 / 360 * 100vw;
            border-radius: 50%;
        }

        /deep/.van-uploader__upload{
            width: 100 / 360 * 100vw;
            height: 100 / 360 * 100vw;
        }
    }
</style>