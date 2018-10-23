<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeList" :key="item.index">
        <img :src="item.img" alt="">
      </mt-swipe-item>

    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/news">
					<img src="../../img/menu1.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/photolist">
					<img src="../../img/menu2.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/goodslist">
					<img src="../../img/menu3.png" alt="">
					<div class="mui-media-body">商品购买</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="#">
					<img src="../../img/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="#">
					<img src="../../img/menu5.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="#">
					<img src="../../img/menu6.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</router-link></li>
		</ul> 
  </div>
</template>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return { swipeList: [] };
  },
  created() {
    this.getSwipePic();
  },
  methods: {
    getSwipePic() {
      this.$http.get("getswipe").then(data => {
        if (data.body.status == 0) {
          this.swipeList = data.body.msg;
        } else {
          Toast("轮播图加载失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
	background-color: #fff;
	border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
border:none;
img {
	width: 60px;
	height: 60px;
}
}
</style>



