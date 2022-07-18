<template>
    <div class="children2">
        <h2>我是子组件ChildCom</h2><br>
        <p>{{timer}}</p>
        <button @click="sendMsg">像父组件传递数据</button>
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
      this.timer = moment().format('YYYY年MM月DD日周E h:mm:ss a')
    }, 0)
  },
  methods: {
    sendMsg () {
      const time = this.timer
      this.$emit('sendDataTo', time)
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
  width: 200px ;
  /* width: 100%; */
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
