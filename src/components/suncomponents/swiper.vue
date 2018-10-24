<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 使用此组件需要父组件向子组件传递swipeList参数 -->
      <mt-swipe-item v-for="item in swipeList" :key="item.index">
        <!-- 图片宽高比例不同，高度都是需要100%，但是宽度不一定，可以使用样式绑定进行操作 -->
        <img :src="item.img_url" alt="" :class="{fullwidth:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>  
</template>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
  }
}

.fullwidth{
  width: 100%;
}
</style>

<script>
export default {
  props:['swipeList',"isfull"]
}
</script>

