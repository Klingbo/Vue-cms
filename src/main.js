// 入口文件
// 导入Vue
import Vue from 'vue';

// 按需导入mint-ui中需要用到的组件--需要安装babel-plugin-component并配置
import { Header, Swipe, SwipeItem } from 'mint-ui';

// 导入路由模块
import VueRouter from 'vue-router';
// 注册路由模块
Vue.use(VueRouter);
// 导入路由配置文件
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource';
// 注册组件
Vue.use(VueResource);


// 导入MUI样式
import './lib/dist/css/mui.min.css';
import './lib/examples/hello-mui/css/icons-extra.css';

// 注册Header组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入app.vue
import app from './app.vue';

let vm = new Vue({
  el:'#app',
  render:function(createElement) {
    return createElement(app)
  },//挂载模板
  router,//挂载路由
});