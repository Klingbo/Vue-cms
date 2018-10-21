import VueRouter from 'vue-router';
import home from './components/tabbar/home.vue';
import member from "./components/tabbar/member.vue";
import cart from './components/tabbar/cart.vue';
import search from './components/tabbar/search.vue';
import newslist from './components/news/newsList.vue';

let router = new VueRouter ({
  routes:[
    {path:'/home', component:home},
    {path:'/member', component:member},
    {path:'/cart', component:cart},
    {path:'/search', component:search},
    {path:'/', redirect:'/home'},
    {path:'/home/news', component:newslist},
    
  ],
  linkActiveClass:'mui-active',
});

export default router;