<template>
    <div class="children2">
        <h2>我是子组件ChildrenEmit02</h2><br>
        <button @click="sendMsg">像父组件传递数据</button>
        <p>子组件年龄： {{childrenAge}}</p>
        <button @click="childrenAge++">子组件年龄加一</button>
         <button @click="unbind">解绑</button>
    </div>
</template>

<script>

export default {
  name: 'ChildrenEmit',
  data () {
    return {
      inputsValue: '',
      childrenAge: 9,
      sortType: 0, // 0原顺序，1降序，2升序
      starPersons: [
        {id: '001', name: '马冬梅', age: 32, sex: '女'},
        {id: '002', name: '周冬雨', age: 15, sex: '女'},
        {id: '003', name: '周杰伦', age: 27, sex: '男'},
        {id: '004', name: '温兆伦', age: 43, sex: '男'}
      ],
      // filterPersons: [],
      flag: true,
      dataArr: [1, 1, 1, 1, 2, 2],
      timer: ''
    }
  },
  methods: {
    sendMsg () {
      this.$emit('sendMessage', this.childrenAge)
      this.$emit('getChildData', this.childrenAge)
    },
    unbind () {
      // this.$off('sendMessage')  // 解绑一个
      // this.$off(['sendMessage'])  // 解绑多个
      this.$off() // 解绑所有
    }
  },
  computed: {
    filterPersons () {
      const arr = this.starPersons.filter(item => {
        return item.name.includes(this.inputsValue)
      })
      if (this.sortType) {
        arr.sort((a, b) => {
          return this.sortType === 1 ? a.age - b.age : b.age - a.age
        })
      }
      return arr
    }
  },
  watch: {
    // inputsValue: {
    //   immediate: true,
    //   handler (val) {
    //     this.filterPersons = this.starPersons.filter(item => {
    //     // return item.name.includes(val)
    //       return item.name.indexOf(val) !== -1
    //     })
    //   }
    // }
    sortType (val) {
      console.log(val)
    }
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
