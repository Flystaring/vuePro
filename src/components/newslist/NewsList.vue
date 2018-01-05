<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newslist/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h5>{{item.title}}</h5>
                        <p class="mui-ellipsis">
                            <span>发表时间: {{item.add_time | dateFormat }}</span>
                            <span>点击: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newsList: []
    };
  },
  created(){
      this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        var result = result.body;
        if (result.status === 0) {
          this.newsList = result.message;
        } else {
          Toast("获取信息失败!");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  h5 {
    font-size: 16px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: skyblue;
    display: flex;
    justify-content: space-between;
  }
}
</style>


