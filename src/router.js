import VueRouter from 'vue-router';
import home from './components/tabbar/home.vue';
import member from "./components/tabbar/member.vue";
import cart from './components/tabbar/cart.vue';
import search from './components/tabbar/search.vue';
import newslist from './components/news/newsList.vue';
import newsinfo from './components/news/newsinfo.vue';
import photolist from './components/photos/photolist.vue';
import photoinfo from './components/photos/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';

let router = new VueRouter ({
  routes:[
    {path:'/home', component:home},
    {path:'/member', component:member},
    {path:'/cart', component:cart},
    {path:'/search', component:search},
    {path:'/', redirect:'/home'},
    {path:'/home/news', component:newslist},
    {path:'/home/newsinfo/:id', component:newsinfo},
    {path:'/home/photolist', component:photolist},
    {path:'/home/photoinfo/:photo_id', component:photoinfo},
    {path:'/home/goodslist', component:goodslist}

  ],
  linkActiveClass:'mui-active',
});

export default router;