<template>
  <div class="hello">
      父组件
      <h3>子组件传递过来的数据时间: {{ChildrDate}}</h3>
      <el-button @click="logBoolean">输出Boolean</el-button>
        <hr>
        <h2>全局事件总线-GlobalEventsBus</h2>
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
    },
    logBoolean () {
      console.log(this.$myBoolean)
    }
  },
  components: {ChildrCom},

  mounted () {
    this.$bus.$on('sendParent', this.getChildData)
  },
  beforeDestroy () {
    this.$bus.$off('sendParent')
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
