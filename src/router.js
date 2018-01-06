import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/newslist/NewsList.vue'
import NewsInfo from './components/newslist/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'

Vue.use(VueRouter);


const router = new VueRouter({
  // mode: "history",
  routes: [{
      path: "/",
      redirect: "/home"
    }, {
      path: "/home",
      component: HomeContainer
    },
    {
      path: "/member",
      component: MemberContainer
    },
    {
      path: "/shopcar",
      component: ShopcarContainer
    },
    {
      path: "/search",
      component: SearchContainer
    },
    {
      path: "/home/newslist",
      component: NewsList
    },
    {
      path: "/home/newslist/newsinfo/:id",
      component: NewsInfo
    },
    {
      path:"/home/photoslist",
      component:PhotosList
    }
  ],
  linkActiveClass: "mui-active"
});
export default router