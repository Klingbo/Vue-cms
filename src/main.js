// 入口文件
// 导入Vue
import Vue from 'vue';

// 按需导入mint-ui中需要用到的组件--需要安装babel-plugin-component并配置
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';

// 导入路由模块
import VueRouter from 'vue-router';
// 注册路由模块
Vue.use(VueRouter);
// 导入路由配置文件
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource';
// 注册模块
Vue.use(VueResource);
// 设置请求根路径
Vue.http.options.root = 'http://127.0.0.1:58888/';

// 导入vue-preview图片预览插件
import VuePreview from 'vue-preview'
// // 注册模块
Vue.use(VuePreview)



// 导入MUI样式
import './lib/dist/css/mui.min.css';
import './lib/examples/hello-mui/css/icons-extra.css';

// 注册mint-ui组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

// 创建全局日期过滤器
import moment from 'moment';
Vue.filter("dateFormat", function(dateStr, pattern='YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern);
});

// 导入评论自组件
import comment from './components/suncomponents/comment.vue';
// 导入轮播图自组件
import swipe from './components/suncomponents/swiper.vue';
// 导入numberbox组件
import numberbox from './components/suncomponents/numberbox.vue';

// 导入app.vue
import app from './app.vue';

// 全局注册评论子组件
Vue.component('comment', comment);
// 全局注册轮播图子组件
Vue.component('swipe',swipe);
// 全局注册numberbox子组件
Vue.component('numberbox', numberbox);

let vm = new Vue({
  el:'#app',
  render:function(createElement) {
    return createElement(app)
  },//挂载模板
  router,//挂载路由
});

// webpack默认使用严格模式打包代码，与mui组件冲突，需要禁用严格模式