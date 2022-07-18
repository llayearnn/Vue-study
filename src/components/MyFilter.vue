<template>
    <div>
        <h2>人员列表</h2><br>
        <!-- 原顺序是sortType 0， -->
        <input type='text' placeholder="请输入名字查询" v-model='inputsValue'>
        <button @click="sortType=1">年龄升序</button>
        <button @click="sortType=2">年龄降序</button>
        <button @click="sortType=0">原顺序</button>
        <ul>
            <li v-for='item in filterPersons' :key="item.id">
                {{item.name}}--{{item.age}}--{{item.sex}}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'MyFilter',
  data () {
    return {
      inputsValue: '',
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
    intervalUpdate () {
      for (let i = 0; i < 6; i++) {
        this.$set(this.dataArr, i, Math.floor(Math.random() * 100))
      };
    },
    showEcharts () {
      console.log(this.dataArr)
      let chartDom = this.$echarts.init(document.getElementById('selfMain'))
      chartDom.setOption({
        title: {
          text: 'ECharts Getting Started Example'
        },
        tooltip: {},
        legend: {
          data: ['sales']
        },
        xAxis: {
          data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
          {
            name: 'sales',
            type: 'bar',
            // data: [5, 20, 36, 10, 10, 20]
            data: this.dataArr
          }
        ]
      })
    },
    myMap () {
      const m = new Map()
      const a = [1, 2]
      m.set(a, 'arr')
      console.log(m.get(a))
      // eslint-disable-next-line no-self-compare
      console.log([1, 2] === [1, 2])
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
    this.myMap()
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
  color: blue;
}
a {
  color: #42b983;
}
</style>
