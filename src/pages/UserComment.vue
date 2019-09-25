<template>
  <div>
      <HeaderNormal title="我的跟帖"/>

      <!-- 评论列表 -->
      <div class="comment-item">
          <div class="time">2019-09-27 10:20</div>


          <!-- 当前评论回复的评论 -->
          <div class="parent">
              <div class="parent-title">
                  @: JOJO
              </div>
              <div class="parent-content">
                    我不当人啦,JOJO!
              </div>
          </div>


          <!-- 个人评论的内容 -->
          <div class="content">
              欧拉欧拉欧拉
          </div>

        <router-link to="#" class="article-link">
            <p>原文: 欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉</p>
            <span class="iconfont iconjiantou1"></span>
        </router-link>
      </div>
  </div>
</template>

<script>
//导入头部
import HeaderNormal from "@/components/HeaderNormal"

export default {
    components:{
        HeaderNormal,
    }
}
</script>

<style scoped lang="less">
    .comment-item{
        padding: 10px 20px;
        font-size: 10px;
        line-height: 1.8;
        border-bottom: 1px solid #ccc;

        .time{
            font-size: 12px;
            color: #999;
            margin-bottom: 5px;
        }
        
        .parent{
            background: #eee;
            padding: 10px;
            margin-bottom: 5px;

            .parent-title{
                font-size: 12px;
                color: #999;
            }
            .parent-content{
                font-size: 12px;
                color: #999;
            }
        }


        .content{
            margin-bottom: 5px;
        }
        
        .article-link{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: #999;

            p{
                overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            }
        }
    }
</style>