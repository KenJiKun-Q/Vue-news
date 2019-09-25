<template>
    <div>
        <HeaderNormal title="我的关注" />

        <!-- 关注用户的列表 -->
        <div class="follow-item">
            <img src="../../static/default_bili.jpg" alt="">

            <div class="item-center">
                <p>水星新闻</p>
                <span>2019-09-26</span>
            </div>

            <span class="cancel">取消关注</span>
        </div>
    </div>
</template>

<script>
// 导入头部组件
import HeaderNormal from "@/components/HeaderNormal"

export default {
    components:{
        HeaderNormal
    }
}
</script>

<style scoped lang="less">
    .follow-item{
        display: flex;
        padding: 20px 15px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #cccccc;
        img{
            display: block;
            width: 60 / 360 * 100vw;
            height: 60 / 360 * 100vw;
            border-radius: 50%;
        }
        .item-center{
            flex: 1;
            padding: 0 10px;
            span{
                color:#999;
                font-size: 12px;
            }
        }

        .cancel{
            display: block;
            background-color: #e1e1e1;
            padding: 0 15px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            border-radius: 50px;
        }
    }
</style>