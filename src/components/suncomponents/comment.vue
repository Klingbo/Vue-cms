<template>
  <div class="comment-container">
    <h3>发表评论</h3>

    <hr>

    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="comment-list" v-for="(item, index) in commentsList" :key="index">
      <div class="comment-list-item">
        <p class="title">
          <span>第{{index+1}}楼</span>
          <span>用户：{{item.user_name}}</span>
          <span>发表时间：{{item.add_time | dateFormat}}</span>
        </p>
        <p class="body">{{item.content}}</p>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getmorecomments">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: ["id"],
  data() {
    return {
      commentsList: [],
      pageindex: 1
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http.jsonp("getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(data => {
          if(data.body.status == 0) {
            console.log(data.body.comments)
            this.commentsList = this.commentsList.concat(data.body.comments);
            console.log(this.commentsList)
          }else {
            Toast('数据加载失败')
          }
        });
    },
    getmorecomments() {
      this.pageindex +=1;
      this.getComments();
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .comment-list {
    margin: 5px 0;
    .comment-list-item {
      font-size: 13px;
      .title {
        background-color: #ccc;
        line-height: 40px;
      }
      .body {
        line-height: 40px;
        text-indent: 2em;
      }
    }
  }
}
</style>
