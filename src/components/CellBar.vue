<template>
    <div class="cell-wrap">
        <div class="cell">
            <span>我的关注</span>
            <i>关注的用户</i>
            <em class="iconfont iconjiantou1"></em>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .cell-wrap{
        padding: 15px 0 15px 15px;

        .cell{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px;
            padding-bottom: 15px;
            height: 24 / 360 * 100vw;
            border-bottom: 1.5px #eee solid;
        }
        i{
            display: block;
            flex: 4;
            text-align: right;
            padding: 0 5px;
            font-size: 13px;
            color: #999;
        }
        em{
            font-weight: bold;
            color: #999;
            font-size: 13px;
        }
    }
</style>