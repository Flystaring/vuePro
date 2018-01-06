import Vue from 'vue'

//按需导入mint-ui
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//导入Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true; //application/x-www-form-urlencoded

//导入mui
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

//导入bootstrap
import "bootstrap/dist/css/bootstrap.css"

import router from './router.js'
import App from './App.vue'

//导入过滤器
import moment from 'moment'

//定义全局的时间过滤器
Vue.filter("dateFormat", function (dataStr, parttern = "YYYY-MM-DD hh:mm:ss") {
  return moment(dataStr).format(parttern);
})


Vue.config.productionTip = false;
var vm = new Vue({
  el: "#app",
  render(createElements) {
    return createElements(App);
  },
  router
});