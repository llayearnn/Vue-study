<template>
  <div>
      <p>我是子组件</p>
      <span>student组件数据{{info}}</span>
      <button @click="sendMsg">发送数据到School组件</button>
      <button @click="info++">加一</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Student',
  data () {
    return {
      info: 99
    }
  },
  methods: {
    sendMsg () {
      pubsub.publish('hello', this.info)
    }
  }
}
</script>
