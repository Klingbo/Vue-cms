<template>
  <div class="goodlist-container">
    <div class="goodslist">
      <div class="goodslist-item" v-for="item in goodslist" :key="item.id" @click="turntoinfopage(item.id)">
        <img :src="item.img_url" alt="">
        <p class="goods-titie">{{item.title}}</p>
        <div class="info">
          <p class="price">
            <span class="sell_price">￥{{item.market_price}}</span>
            <span class="market_price">￥{{item.sell_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getmoregoods">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [],
      pageindex:1,
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      this.$http.get("getgoodslist/" + this.pageindex).then(data => {
        if (data.body.status == 0) {
          this.goodslist = this.goodslist.concat(data.body.message);
        }
      });
    },
    getmoregoods(){
      this.pageindex += 1;
      this.getgoodslist();
    },
    // 编程式导航
    turntoinfopage(id) {
      this.$router.push('/home/goodsinfo/' + id)
    }
  }
};
</script>

<style lang="scss" scoped>
.goodlist-container {
  .goodslist {
    display: flex;
    flex-flow: row wrap;
    padding: 5px;
    justify-content: space-between;
    .goodslist-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px #ccc;
      margin: 4px 0;
      padding: 2px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      min-height: 357px;
      img {
        width: 100%;
      }
      .goods-titie {
        font-size: 16px;
        margin: 0;
        color: #000;
        font-weight: bold;
      }
      .info {
        background-color: #ddd;
        padding: 5px;
        .price {
          .sell_price {
            font-weight: bold;
            font-size: 14px;
            color: red;
          }
          .market_price {
            font-size: 12px;
            text-decoration: line-through;
            margin-left: 8px;
          }
        }
        .sell {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>


