// 入口文件
// 导入Vue
import Vue from 'vue';

// 按需导入mint-ui中需要用到的组件--需要安装babel-plugin-component并配置
import { Header } from 'mint-ui';

// 导入MUI样式
import './lib/dist/css/mui.min.css'

// 引入Header组件
Vue.component(Header.name, Header)

// 导入app.vue
import app from './app.vue';

let vm = new Vue({
  el:'#app',
  render:function(createElement) {
    return createElement(app)
  },
});