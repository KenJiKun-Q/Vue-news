<template>
    <!-- $event -->
    <div class="cell-wrap" @click="$emit('click',$event)">
        <div class="cell">
            <span>{{label}}</span>
            <i>{{text}}</i>
            <em class="iconfont iconjiantou1"></em>
        </div>
    </div>
</template>

<script>
export default {
    props:["label","text"]
}
</script>

<style scoped lang="less">
    .cell-wrap{
        padding-left: 10px ;
        .cell{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px;
            height: 48 / 360 * 100vw;
            border-bottom: 1px #eee solid;
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