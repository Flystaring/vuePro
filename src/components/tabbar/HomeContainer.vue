<template>
  <div>

    <!-- 轮播图区域 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in getList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    

    <h1>HomeContainer</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        var result = result.body;
        console.log(result);
        if (result.status === 0) {
          this.getList = result.message;
          // Toast("获取轮播失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {

    img{
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
</style>

