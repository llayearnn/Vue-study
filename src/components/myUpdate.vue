<template>
    <div>
        <h2>人员列表</h2>
        <button @click="updateFirstLine">更新首行信息</button>
        <ul>
            <li v-for='item in starPersons' :key="item.id">
                {{item.name}}--{{item.age}}--{{item.sex}}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'MyUpdate',
  data () {
    return {
      inputsValue: '',
      starPersons: [
        {id: '001', name: '马冬梅', age: 32, sex: '女'},
        {id: '002', name: '周冬雨', age: 15, sex: '女'},
        {id: '003', name: '周杰伦', age: 27, sex: '男'},
        {id: '004', name: '温兆伦', age: 43, sex: '男'}
      ]
    }
  },
  methods: {
    updateFirstLine () {
    // 以下可以修改 data
    //   this.starPersons[0].name = '马老师'
    //   this.starPersons[0].age = 50
    //   this.starPersons[0].sex = '男'
      // 以下可以不可修改 data
    //   this.starPersons[0] = {id: '001', name: '马老师', age: 50, sex: '男'}
      this.$set(this.starPersons, 0, {id: '001', name: '马老师', age: 50, sex: '男'})
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {

  },
  beforeDestroy () {
    this.timer && clearInterval(this.timer)
  }

}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 10px 10px;
  font-size: 15px;
  color: rgb(230, 44, 44);
}
a {
  color: #42b983;
}
</style>
