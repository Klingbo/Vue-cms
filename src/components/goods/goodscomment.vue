<template>
  <div>
    <comment :id="'goodscomment/' + this.id"></comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.goods_id,
    }
  }
}
</script>

