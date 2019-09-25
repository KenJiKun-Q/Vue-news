<template>
    <!-- $event -->
    <div class="cell-wrap" @click="$emit('click',$event)">
        <div class="cell">
            <span>{{label}}</span>
            <!-- 如果type等于password,就显示星号 -->
            <i>{{type === 'password' ? '******' :text }}</i>
            <em class="iconfont iconjiantou1"></em>
        </div>
    </div>
</template>

<script>
export default {
    //label是左侧的文字,text是右侧的文字
    props:["label","text","type"]
}
</script>

<style scoped lang="less">
    .cell-wrap{
        padding-left: 20px ;
        .cell{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px;
            height: 48 / 360 * 100vw;
            border-bottom: 1px #dcdcdd solid;
        }
        i{
            display: block;
            flex: 1;
            text-align: right;
            padding: 0 10px;
            font-size: 13px;
            color: #999;
        }
  
    }
</style>