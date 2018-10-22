<template>
  <div>
    <ul class="mui-table-view" v-for="item in newsList" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time | dateFormat}}</span>
								<span>点击：{{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>
</template>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h3 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<script>
import { Toast } from "mint-ui";
export default {
	data() {
		return {
			newsList:[],
		};
	},
	methods:{
		getNewsList() {
			this.$http.jsonp("getNewsList").then(data => {
				if(data.body.status == 0) {
					this.newsList = data.body.newsList;
				}else {
					Toast('请求数据失败');
				}
			});
		},
	},
	created() {
		this.getNewsList();
	},
}
</script>


