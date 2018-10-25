<template>
  <div class="goodsinfo-container">
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
      <div class="ball" v-show="ballflag"></div>
    </transition>
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
          <p>
            <span>购买数量：</span>
            <!-- 事件绑定 子元素向父元素传值 -->
            <numberbox @getinputvalue="getinputvalue" :max="goods_info.stock_quantity"></numberbox>
            </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addtocart">加入购物车</mt-button>
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
export default {
  data() {
    return {
      goods_id: this.$route.params.goods_id,
      swipeList: [],
      goods_info: {},
      ballflag: false,
      inputvalue: 1,
    };
  },
  created() {
    this.getlunbo();
    this.getgoodsinfo();
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
    },
    addtocart() {
      this.ballflag = !this.ballflag;
      // 需要加入购物车的商品的信息
      let goodsData = {
        goods_id: parseInt(this.goods_id), //商品id
        count: parseInt(this.inputvalue), //商品数量
        price:this.goods_info.market_price,
        title:this.goods_info.title,
        max:this.goods_info.stock_quantity,
        img:this.swipeList[0],
        selected: true //商品购物车中是否被选中
      };
      // 调用方法传回数据
      this.$store.commit('addtocart',goodsData);
      this.$http.post('addtocart',{cart:this.$store.state.cart}).then(data => {
        console.log('ok');
      })
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      /*
      在页面滚动时，小球相对购物车的距离会改变，在分辨率发生变化时，距离也会改变
      要想保持小球一定能滚动到购物车上，可以用购物车在页面上的位置-小球在页面上的位置
      小球在组件中，购物车不在组件中，最方便的操作是直接使用dom进行计算，函数getBoundingClientRect()
      在组件中可以操作dom树中任意元素，不受限制
      */

      const ballrect = document.querySelector(".ball").getBoundingClientRect();
      const badgerect = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xdistance = badgerect.left - ballrect.left;
      const ydistance = badgerect.top - ballrect.top;

      el.offsetWidth;
      el.style.transform = `translate(${xdistance}px,${ydistance}px)`;
      el.style.transition = "all 1s cubic-bezier(0.4,-0.3,1,0.68)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    getinputvalue(value) {
      this.inputvalue = parseInt(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
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
  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 100;
    left: 150px;
    top: 390px;
  }
}
</style>


