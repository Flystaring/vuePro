import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/newslist/NewsList.vue'
import NewsInfo from './components/newslist/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'
import PhotosInfo from './components/photos/PhotosInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

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
    },
    {
      path:"/home/photoinfo/:id",
      component:PhotosInfo
    },
    {
      path:"/home/goodslist",
      component:GoodsList
    },
    {
      path:"/home/goodsinfo/:id",
      component:GoodsInfo,
      name:"goodsinfo"
    },
    {
      path:"/home/goodsdesc/:id",
      component:GoodsDesc,
      name:"goodsdesc"
    },
    {
      path:"/home/goodscomment/:id",
      component:GoodsComment,
      name:"goodscomment"
    }
  ],
  linkActiveClass: "mui-active"
});
export default router