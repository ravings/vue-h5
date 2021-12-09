<template>
  <div>
    <van-search
      v-model="searchValue"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <div class="warp-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onSearchMore"
      >
        <div class="warp-item" v-for="(item, index) in searchData" :key="index">
          <div class="warp-item-content">
            <div>{{ item.title }}</div>
            <div class="warp-item-content-desc">{{ item.desc }}</div>
            <div class="warp-item-content-info">
              <div>{{ item.author }}</div>
              <div class="warp-item-content-info-right">
                <div>{{ item.categoryName }}</div>
                <div>{{ item.chapterStatus == "END" ? "完结" : "连载" }}</div>
                <div>{{ item.word }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { Search as vanSearch, List as vanList } from "vant";
import { searchBook, apiSearchBook } from "@/api/index.js";
export default {
  data() {
    return {
      searchValue: "神秘复苏",
      pageNum: 1,
      loading: false,
      finished: false,
      searchData: [],
    };
  },
  components: {
    vanSearch,
    vanList,
  },
  //监听属性 类似于data概念
  computed: {},
  //方法集合
  methods: {
    onSearch() {
      console.log("111");
      apiSearchBook().then(res => {
        console.log(res);
        this.searchData = res.data.list;
      });
      console.log(this.searchData);
      searchBook({
        params: {
          keyWord: this.searchValue,
          pageNum: 1,
          pageSize: 10,
        },
      });
    },
    onSearchMore() {
      apiSearchBook()
        .then(res => {
          console.log(res);
          this.searchData.push(...res.data.list);
          this.loading = false;
          if (this.searchData.length >= 40) {
            this.finished = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import; 引入公共css类
.warp-list {
  // height: calc(100% - 54px);
}
.warp-item {
  display: flex;
  margin-top: 10px;
  text-align: left;
  padding: 0 20px;
  &-content {
    // margin-left: 10px;
    font-size: 12px;
    flex: 1;
    &-desc {
      height: 36px;
      color: #969ba3;
      margin: 8px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    &-info {
      color: #969ba3;
      display: flex;
      // justify-content: space-between;
      &-right {
        display: flex;
        font-size: 12px;
        div {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
