<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2 v-if="flag">Ecosystem</h2>
    <button @click="handleChangeFlag">切换显示</button>
    <h1>{{ flag ? "是这样的" : "不是这样的" }}</h1>
    <input v-model="flag" />
    <ol v-for="item in todos" :key="item.id">
      <li>
        {{ item.text }}
      </li>
    </ol>

    <p>计算属性{{ getComputedTime }}</p>
    <p>方法 {{ getFunctionTime() }}</p>
    <button @click="showInfo($event, 33)">点击显示</button>
    <br />
    <a
      :style="{ 'text-decoration': 'none', color: 'purple' }"
      href="http://ww.baidu.com"
      @click.prevent="showInfo"
      >点击弹出提示，去除a标签默认跳转行为</a
    >
    <br />
    <a
      style="text-decoration: none; color: blue"
      href="http://ww.baidu.com"
      @click.prevent="showInfo"
      >点击弹出提示，去除a标签默认跳转行为</a
    >
  </div>
</template>

<script>
export default {
  name: 'TestDemo',
  data () {
    return {
      msg: 'Welcome to My First Demo',
      flag: true,
      todos: [
        { id: 0, text: '学习javascript' },
        { id: 1, text: '学习vue' },
        { id: 2, text: '整个牛项目' }
      ]
    }
  },
  methods: {
    handleChangeFlag () {
      this.flag = !this.flag
    },
    getFunctionTime () {
      return Date.now().toLocaleString()
    },
    showInfo (_, a) {
      console.log(a)
      console.log(_)
      alert('你好')
    }
  },
  computed: {
    getComputedTime () {
      return Date.now()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
