<template>
  <div class="hello">
      父组件
      <h3>子组件传递过来的数据时间: {{ChildrDate}}</h3>
      <el-button @click="logBoolean">输出Boolean</el-button>
        <hr>
        消息订阅预发布
      <ChildrCom ref="ChildrComEmit"></ChildrCom>
  </div>
</template>

<script>

import ChildrCom from './ChildCom.vue'
import pubsub from 'pubsub-js'
export default {
  name: 'EmitComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ChildrDate: null,
      // 订阅消息id
      pubId: null
    }
  },
  methods: {
    getChildData (msg) {
      console.log('获取子组件数据1', msg)
      this.ChildrDate = msg
    },
    logBoolean () {
      console.log(this.$myBoolean)
    }
  },
  components: {ChildrCom},

  mounted () {
    let that = this
    // 消息发布订阅模式-订阅消息
    // 这里有俩参数 第一个是消息名，第二个参数是数据
    this.pubId = pubsub.subscribe('hello', function (msg, data) {
      that.getChildData(data)
      // console.log('有人发布消息了，这里订阅收到消息')
    })
  },
  beforeDestroy () {
    // 取消订阅
    pubsub.unsubscribe(this.pubId)
  }

}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
