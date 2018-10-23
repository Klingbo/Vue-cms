<template>
  <div>
    <!-- 去掉mui-fullscreen类，取消全屏 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item" href="#item1mobile">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile">
							法制
						</a>
						<a class="mui-control-item" href="#item5mobile">
							体育
						</a>
						<a class="mui-control-item" href="#item5mobile">
							教育
						</a>
					</div>
				</div>
			</div>
  </div>
</template>

<script>
// 导入MUI js脚本
import mui from "../../lib/dist/js/mui.min.js";

export default {
  data() {
    return {};
  },
  methods: {},
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
</style>


