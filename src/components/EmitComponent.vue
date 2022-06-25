<template>
  <div class="hello">
      父组件
      <button @click="getChildData">获取数据</button>
      <!-- <children-props></children-props> -->
      <children-props :getChildData='getChildData'></children-props>
        <hr>
        <!-- 通过父组件 给子组件绑定一个自定义事件实现，第一种 使用@或者v-on -->
      <children-emit @sendMessage="sendMessage"></children-emit>
        <!-- 通过父组件 给子组件绑定一个自定义事件实现，第二种 使用ref -->
       <!-- <children-emit ref="childrenEmit"></children-emit> -->

  </div>
</template>

<script>

import ChildrenEmit from './ChildrenEmit.vue'
import ChildrenProps from './ChildrenEmit02.vue'
export default {
  name: 'EmitComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getChildData (msg) {
      console.log('获取子组件数据1', msg)
    },
    sendMessage (msg) {
      console.log('获取子组件数据2', msg)
    }
  },
  components: {ChildrenEmit, ChildrenProps},

  mounted () {
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
