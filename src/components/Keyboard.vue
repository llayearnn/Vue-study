<template>
    <div>
        <h2>欢迎学习Vue键盘事件</h2>
        <!-- <input type='text' placeholder="按下回车提示" @keyup="showInfo"> -->
        <button @click="numbers.a++">加一</button>
        <h1 v-if='flag'>我是动态显示{{ new Date()}}</h1>
         <div id='selfMain' :style="{width:'800px',height:'500px',border:'1px solid red'}">
        <!-- <div id='selfMain' style="font-size:30px; width: 500px;height: 500px;border: 1px solid black "> -->

         </div>
    </div>
</template>

<script>

export default {
  name: 'Keyboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginType: 'username',
      styleObject: {
        width: '500px',
        height: '500px',
        border: '1px solid black'

      },
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      nameBind: '单向数据绑定',
      nameModel: '双向数据绑定',
      numbers: {
        a: 1,
        b: 2
      },
      flag: true,
      dataArr: [1, 1, 1, 1, 2, 2],
      dataArr1: [],
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
    }
  },
  mounted () {
    setInterval(() => {
      this.intervalUpdate()
      console.log(this.dataArr)
      this.showEcharts()
    }, 500)

    /**
     * 1.Vue常用的按键别名
     *  回车 => enter
     *  删除 => delete
     *  退出 => esc
     *  空格 => space
     *  换行 => tab (特殊，必须配合keydown事件)
     *  上 => up
     *  下 => down
     *  左 => left
     *  右 => right
     * 2.Vue未提供别名的按键，可以使用按键原始的key值进行绑定，但需要转短横线命名。
    */
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
