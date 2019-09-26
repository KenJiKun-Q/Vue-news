<template>
  <div class="card">
    <!-- 左边文字 -->
    <div class="card-left">
      <div class="post-title">
        欧拉欧拉欧拉欧拉欧拉欧拉欧拉
        欧拉欧拉欧拉欧拉欧欧拉欧拉欧
        拉欧拉欧拉欧拉
      </div>
      <p class="post-info">
        <span>DIO</span>
        <span>100跟帖</span>
      </p>
    </div>

    <!-- 右边图片 -->
    <div class="card-img">
      <img src="http://img4.imgtn.bdimg.com/it/u=3611784460,2667510502&fm=26&gp=0.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.card {
  display: flex;
  padding: 15px 10px 10px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #ccc solid;
  .card-left {
    flex: 1;
    align-self:baseline;
    .post-title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.4;
    }
    .post-info{
        color: #a286a2;
        font-size: 13px;
        padding: 20px 0 0px 0;
        span{
            margin-right: 10px;
           
        }
    }
  }

  .card-img{
      img{
          width: 121 / 360 * 100vw;
          height: 75 / 360 * 100vw;
      }
  }
}
</style>