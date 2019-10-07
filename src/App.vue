<template>
  <div>
      <!-- 组件占位符 -->
      <keep-alive include="index,search">
        <router-view></router-view>
      </keep-alive>

  </div>
</template>


<script>
export default {
    data(){
        return{
           
        }
    }
};
</script>

<style>

@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
/* 引入vant插件 */
@import url("../node_modules/vant/lib/index.css");
/* 公共样式 */
*{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
}

a:hover{
    text-decoration: none;
}

ul,li,il{
    list-style: none;
}

i,em{
    font-style: normal;
}
</style>