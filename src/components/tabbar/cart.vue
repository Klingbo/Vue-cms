<template>
  <div>
    <div class="cart-goods-list">
      <div class="mui-card" v-for="item in cartinfo" :key="item.goods_id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="item.selected" @change="changeselected(item.goods_id,item.selected)"></mt-switch>
            <img :src="item.img.img_url" alt="">
            <div class="info">
              <p class="title">{{item.title}}</p>
              <p>
                <span class="price">￥{{item.price}}</span>
                <numberbox style="height:25px;" :max="item.max" :goods_id="item.goods_id" :no="item.count"></numberbox>
                <a @click="removeitem(item.goods_id)">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
    </div>

    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <div class="checkout-info">
              <div>
                <p>总计（ 不含运费 ）</p>
                <p>已选商品<span class="sumno"> {{this.$store.getters.showselectedquantity}} </span>件，总价：<span class="sumprice">￥{{this.$store.getters.showselectedprice}}</span></p> 
              </div>
              <mt-button type="danger" size="normal">去结算</mt-button>
            </div>

					</div>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cartinfo:this.$store.state.cart,
      inputvalue:1,
    }
  },
  methods:{
    removeitem(goods_id) {
      this.$store.commit('removeitem',parseInt(goods_id))
      this.$http.post('addtocart',{cart:this.$store.state.cart}).then(data => {
        console.log('ok');
      })
    },
    changeselected(goods_id,status) {
      this.$store.commit('changeselected',{goods_id,status});
      this.$http.post('addtocart',{cart:this.$store.state.cart}).then(data => {
        console.log('ok');
      })
    }
  }

};
</script>

<style lang="scss" scoped>
.cart-goods-list {
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    img {
      width: 60px;
      height: 60px;
    }
    .info{
      .title {
        font-size: 13px;
        font-weight: bold;
        color: #000;
      }
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

.checkout-info{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  .sumno,.sumprice {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>

