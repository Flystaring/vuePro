import Vue from 'vue'

//按需导入mint-ui
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入mui
import "./lib/mui/css/mui.css"

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