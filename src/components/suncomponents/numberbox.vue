<template>
  <!-- 最大值需要从父组件传递，但是父组件中的stock_quantity是通过ajax异步获取的，子组件创建完成时，可能还未
  获取到，所以可以用watch方法进行监听，父组件传来的值，只要改变就进行更新 -->
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='this.max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- input中的值需要传递给父组件 -->
    <input id="test" class="mui-input-numbox" type="number" :value="no?no:1" ref="numbox" @change="countchanged"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/dist/js/mui.min.js";
export default {
  // 页面组件渲染完毕后，初始化MUI组件
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods:{
     countchanged() {
       this.$emit('getinputvalue', this.$refs.numbox.value);
       this.$store.commit('updatecount',{
         goods_id: parseInt(this.goods_id),
         count:parseInt(this.$refs.numbox.value),
       })
       this.$http.post('addtocart',{cart:this.$store.state.cart}).then(data => {
        console.log('ok');
      })
     },
  },
  props:['max','goods_id','no'],
  watch:{
    'max':function(newval,oldval) {
      mui(".mui-numbox").numbox().setOption('max',newval)
    },
  }
};
</script>
