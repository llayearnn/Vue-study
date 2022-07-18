<template>
  <div class="hello">
      父组件
      <h3>子组件传递过来的数据时间: {{ChildrDate}}</h3>
        <hr>
        发布订阅模式
      <ChildrCom ref="ChildrComEmit"></ChildrCom>
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
    this.$refs.ChildrComEmit.$on('sendParent', this.getChildData)
    // this.$refs.childrenEmit.$on('sendMessage', this.sendMessage)
    // this.$refs.childrenEmit.$on('qqqqqqqqqq', function (msg) {
    //   console.log(msg)
    // })
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
