<template>
  <div>
    <div class="profile">
      <img
        src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1802332780,2717053252&fm=179&app=42&f=JPEG?w=121&h=140"
        alt
      />

      <div class="profile_center">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>
          比利王
        </div>
        <div class="time">2019-09-24</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.profile {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #eee solid;

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

  .time{
      color: #a0a0a0;
      font-size: 14px;
      margin-top: 5px;
  }

  span{
      color: #a0a0a0;
      font-size: 20px;
      font-weight: bold
  }

}
</style>