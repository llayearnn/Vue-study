<template>
  <div class="hello">
      父组件
      <h3>子组件传递过来的数据时间: {{ChildrDate}}</h3>
        <hr>
        通过自定义事件
      <ChildrCom v-on:sendDataTo=getChildData></ChildrCom>
      <div class="other">其他</div>
      <!-- <children-props :getChildData='getChildData'></children-props> -->

  </div>
</template>

<script>

import ChildrCom from './ChildCom.vue'
export default {
  name: 'EmitComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ChildrDate: null
    }
  },
  methods: {
    getChildData (msg) {
      console.log('获取子组件数据1', msg)
      this.ChildrDate = msg
    }
  },
  components: {ChildrCom},

  mounted () {
    // this.$refs.childrenEmit.$on('sendMessage', this.sendMessage)
    // this.$refs.childrenEmit.$on('qqqqqqqqqq', function (msg) {
    //   console.log(msg)
    // })
  }

}
</script>

<style scoped>
.hello{
  width: 100%;
  /* height: 100%; */
    height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(250, 1, 1);
}
  .other{
    flex: 1;
      border: 1px solid rgb(1, 5, 250);
  }
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
