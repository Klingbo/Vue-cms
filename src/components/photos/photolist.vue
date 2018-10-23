<template>
  <div>
		<!-- 顶部横向滑动菜单 -->
    <!-- 去掉mui-fullscreen类，取消全屏 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item ', item.id == 0?'mui-active':'']" v-for="item in phototitlelist" :key="item.id" @tap="getphotolist(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>

			<ul class="photo-list">
				<router-link v-for="item in photolist" :key="item.photo_id" tag="li" :to="'photoinfo/' + item.photo_id">
					<img v-lazy="item.img_url">
					<div class="info">
						<p class="info-title">{{item.title}}</p>
						<p class="info-body">{{item.zhaiyao}}</p>
					</div>
				</router-link>
			</ul>
  </div>
</template>

<script>
// 导入MUI js脚本
import mui from "../../lib/dist/js/mui.min.js";

export default {
  data() {
    return {
      phototitlelist: [],
      photolist: []
    };
  },
  methods: {
    getphototitlelist() {
      this.$http.get("getphototitlelist").then(data => {
        if (data.body.status == 0) {
          this.phototitlelist = data.body.message;
        }
      });
    },
    getphotolist(id) {
      this.$http.get("getphotolist/" + id).then(data => {
        if (data.body.status == 0) {
          this.photolist = data.body.photos;
        }
      });
    }
  },
  created() {
    this.getphototitlelist();
    this.getphotolist(0);
  },
  mounted() {
    // 页面组件渲染完毕后，初始化MUI组件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005,
      bounce: true //是否启用回弹
    });
  }
};
</script>

style <style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  padding: 0 5px;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
		box-shadow: 0 0 6px 2px #666;
    img {
      width: 100%;
      height: 100%;
      margin: auto;
      vertical-align: middle;
    }
    img [lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      text-align: left;
      position: absolute;
      bottom: 0;
			background: rgba(0,0,0,0.5);
      .info-title {
        color: white;
        font-size: 14px;
        padding: 0;
				margin: 0;
      }
      .info-body {
        color: white;
        font-size: 12px;
        padding: 0;
				margin: 0;
      }
    }
  }
}
</style>


