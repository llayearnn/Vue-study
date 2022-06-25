<template>
    <div class="children1">
        <h2>我是子组件ChildrenEmitProps</h2><br>
        <button @click="sendData">像父组件传递数据</button>
        <p>子组件年龄： {{childrenAge}}</p>
        <button @click="childrenAge++">子组件年龄加一</button>
    </div>
</template>

<script>

export default {
  name: 'ChildrenProps',
  props: ['getChildData'],
  data () {
    return {
      inputsValue: '',
      childrenAge: 88
    }
  },
  methods: {
    sendData () {
      this.getChildData(this.childrenAge)
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
.children1{
  background-color: rgb(224, 24, 24);
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
