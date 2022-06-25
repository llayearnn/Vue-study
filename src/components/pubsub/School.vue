<template>
    <div style="background-color:green ">
      <p>我是School组件</p>
      <span>Student组件传递过来的数据</span>
      <span style="background-color:red ">{{info}}</span>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Student',
  data () {
    return {
      info: null,
      count: 0
    }
  },
  mounted () {
    //   订阅消息 回调函数里面有两个参数 第一个是消息名，第二是数据
    this.pubId = pubsub.subscribe('hello', (messageName, data) => {
      console.log('发布了hello消息')
      this.info = data
    //   this.count++
    //   console.log(this.count)
    })
  },
  beforeDestroy () {
    //   销毁定于
    pubsub.unscribe(this.pubId)
  }
}
</script>
