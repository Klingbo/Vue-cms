<template>
  <div class="newsinfo-container">
    <h4 class="title">{{newsinfo.title}}</h4>
    <p class="sub-title">
      <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>

    <hr>

    <article class="article">
      {{newsinfo.content}}
    </article>
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data(){
    return {
      // 将路由上的参数id挂载到组件本地，方便调用
      id: this.$route.params.id,
      newsinfo:{},
    }
  },
  methods:{
    getnewsinfo() {
      this.$http.get('getnewsinfo/'+this.id).then(data => {
        if(data.body.status == 0) {
          this.newsinfo = data.body.news;
        }else {
          Toast('数据加载失败')
        }
      });
    },
  },
  created() {
    this.getnewsinfo();
  }
  
}
</script>


<style lang="scss" scoped>
  .newsinfo-container {
    padding: 0 4px;
    .title {
      font-size: 16px;
      margin: 15px 0;
      text-align: center;
      color: red;
    }
    .sub-title {
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    .article {
      margin: 20px 0;
    }
  }
</style>

