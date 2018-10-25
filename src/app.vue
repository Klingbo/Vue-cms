<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="固定在顶部">
      <span slot="left" @click="goback" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 顶部 -->

		<!-- 主体 -->
		<transition>
			<router-view></router-view>
		</transition>

		
		<!-- 主体 -->

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{this.$store.getters.totalquantity}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <!-- 底部 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  // 刷新页面后也进行判断，如果当前路由时home就隐藏返回键
  created() {
    console.log(this.$route.path);
    if (this.$route.path == "/home") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  watch: {
    // 监听路由变化，如果当前路由时home就隐藏返回键
    "$route.path": function(newpath, oldpath) {
      if (newpath == "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
* {
  touch-action: pan-y;
}

// 更改样式解决底部tabbar无法切换问题
.mui-bar-tab .tab-item.mui-active {
  color: #007aff;
}
.mui-bar-tab .tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .tab-item .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mint-header {
  z-index: 100;
}
</style>



