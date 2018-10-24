<template>
  <div class="goods-description-container">
    <h1 class="goods-description-title">{{description.title}}</h1>
    <hr>
    <p class="goods-description">{{description.content}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods_id: this.$route.params.goods_id,
      description:{},
    }
  },
  created() {
    this.getpgoodsdescription();
  },
  methods:{
    getpgoodsdescription() {
      this.$http.get('getgoodsdescription/' + this.goods_id).then(data => {
        if(data.body.status == 0) {
          this.description = data.body.message;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-description-container {
  padding: 0 10px;
  .goods-description-title {
    font-size: 16px;
    font-weight: bold;
    color: #26a2ff;
    text-align: center;
    margin-top: 10px;
  }
  .goods-description {
    font-size: 14px;
    line-height: 30px;
  }
}
</style>


