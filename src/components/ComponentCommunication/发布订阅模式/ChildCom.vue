<template>
    <div class="children2">
        <h2>我是子组件ChildCom</h2><br>
        <p>{{timer}}</p>
        <button @click="sendMsg">像父组件传递数据</button>
        <button @click="unbind">解绑</button>
    </div>
</template>

<script>

import moment from 'moment'
export default {
  name: 'ChildrenEmit',
  data () {
    return {
      inputsValue: '',
      flag: true,
      dataArr: [1, 1, 1, 1, 2, 2],
      timer: undefined
    }
  },
  created () {
    setInterval(() => {
      // const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      this.timer = moment().format(`YYYY年MM月DD日周E h:mm:ss a`)
    }, 0)
  },
  methods: {
    sendMsg () {
      const time = this.timer
      this.$emit('sendParent', time)
    },
    unbind () {
      // this.$off('sendMessage')  // 解绑一个
      // this.$off(['sendMessage'])  // 解绑多个
      this.$off() // 解绑所有
    }
  },
  mounted () {
  }

}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
.children2{
  background-color: rgb(24, 131, 224);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 10px 10px;
  font-size: 15px;
  color: blue;
}
a {
  color: #42b983;
}
</style>
