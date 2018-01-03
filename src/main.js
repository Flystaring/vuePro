import Vue from 'vue'

//按需导入mint-ui
import { Header, Swipe, SwipeItem, Toast} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入mui
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

//导入bootstrap
import "bootstrap/dist/css/bootstrap.css"

import router from './router.js'
import App from './App.vue'

// Vue.use(Mint);


Vue.config.productionTip = false;
var vm = new Vue({
  el: "#app",
  render(createElements) {
    return createElements(App);
  },
  router
});