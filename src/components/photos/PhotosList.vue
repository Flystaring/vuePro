<template>
  <div>

    <!-- 图片分类列表 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id==0? 'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotosList(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/' + item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: [], //图片分类列表
      list: [] //图片列表
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotosList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        var result = result.body;
        result.message.unshift({ title: "全部", id: 0 });
        this.cates = result.message;
      });
    },
    getPhotosList(cateid) {
      this.$http.get("api/getimages/" + cateid).then(result => {
        var result = result.body;
        this.list = result.message;
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y; //去除谷歌滑动提示
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
