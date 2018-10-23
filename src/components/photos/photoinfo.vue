<template>
  <div class="photoinfo-container">
    <h1 class="photo-title">{{photoinfo.title}}</h1>

    <p class="photo-subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>

    <hr>

    <!-- 缩略图 -->
      <vue-preview :slides="photolist"></vue-preview>
    <!-- 缩略图 -->

    <!-- 图片信息 -->
    <p class="content">{{photoinfo.content}}</p>
    <!-- 图片信息 -->

    <!-- 评论子组件 -->
    <comment :id="'photocomment/' + this.photo_id"></comment>
    <!-- 评论子组件 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo_id: this.$route.params.photo_id,
      photoinfo: {},
      photolist: []
    };
  },
  created() {
    this.getphotoinfo();
    this.getphotos();
  },
  methods: {
    getphotoinfo() {
      this.$http.get("getphotoinfo/" + this.photo_id).then(data => {
        if (data.body.status == 0) {
          this.photoinfo = data.body.message;
        }
      });
    },
    getphotos() {
      let id = this.photo_id.slice("/");
      this.$http.get("getphotos/" + id).then(data => {
        let list = data.body.message;
        list.forEach(value => {
          value.w = 1920;
          value.h = 1080;
        });
        this.photolist = list;
      });
    }
  }
};
</script>

<style lang="scss">
.photoinfo-container {
  padding: 3px;
  .photo-title {
    color: #26a2ff;
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .photo-subtitle {
    display: flex;
    justify-content: space-between;
  }
  .content {
    line-height: 30px;
  }
  .my-gallery {
    display: flex;
    flex-flow: row wrap;
    figure {
      margin: 5px 10px;
    }
  }
}
</style>


