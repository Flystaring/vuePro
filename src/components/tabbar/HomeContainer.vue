<template>
  <div>

    <!-- 轮播图区域 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <!-- xs为超小屏 ≤ 400    sm为 ≥ 400 -->
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoslist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/Swiper.vue";

export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        var result = result.body;
        if (result.status === 0) {
          this.lunbotuList = result.message;
        } else {
          Toast("获取轮播失败");
        }
      });
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    img {
      height: 100%;
      width: 100%;
    }
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: peachpuff;
    }
    &:nth-child(3) {
      background-color: cyan;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: white;

  .mui-table-view-cell {
    border: none;

    img {
      height: 60px;
      width: 60px;
    }
  }
}
</style>

