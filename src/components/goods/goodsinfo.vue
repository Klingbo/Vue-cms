<template>
  <div class="goodsinfo-container">

    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" >
            <swipe :swipeList="swipeList" :isfull="false"></swipe>
					</div>
				</div>
			</div>

    <div class="mui-card">
      <div class="mui-card-header">{{goods_info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span>市场价：<del>￥{{goods_info.sell_price}}</del></span>
            <span>销售价：</span><span class="sell-price">￥{{goods_info.market_price}}</span>
          </p>
          <p><span>购买数量：</span><numberbox></numberbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goods_info.goods_no}}</p>
          <p>库存情况：{{goods_info.stock_quantity}}</p>
          <p>上架时间：{{goods_info.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="gotogoodsdescription(goods_info.id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="gotogoodscomment(goods_info.id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/dist/js/mui.min.js";
export default {
  data() {
    return {
      goods_id: this.$route.params.goods_id,
      swipeList: [],
      goods_info: {}
    };
  },
  created() {
    this.getlunbo();
    this.getgoodsinfo();
  },
  // 页面组件渲染完毕后，初始化MUI组件
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getlunbo() {
      this.$http.get("getlunbo/" + this.goods_id).then(data => {
        if (data.body.status == 0) {
          this.swipeList = data.body.message;
        }
      });
    },
    getgoodsinfo() {
      this.$http.get("getgoodsinfo/" + this.goods_id).then(data => {
        if (data.body.status == 0) {
          this.goods_info = data.body.message;
        }
      });
    },
    gotogoodsdescription(goods_id) {
      this.$router.push({
        name: "goodsdescription",
        params: { goods_id }
      });
    },
    gotogoodscomment(goods_id) {
      this.$router.push({ name: "goodscomment", params: { goods_id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
}
.sell-price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.mui-card-footer {
  flex-direction: column;
  button {
    margin: 5px 0;
  }
}
</style>


