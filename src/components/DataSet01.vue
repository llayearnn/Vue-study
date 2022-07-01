<template>
  <div>
    <el-button type="text" @click="openDialog">点击打开 Dialog</el-button>
    <el-button @click="addString">拼接一下</el-button>
    <el-button @click="closeWin">关闭</el-button>
    <div>
      <el-input :value="addStr.join(',')" clearable></el-input>
    </div>
    <el-radio-group>
      <el-radio-group v-model="radio1" @change="selectEchartArray">
        <el-radio-button label="1"></el-radio-button>
        <el-radio-button label="2"></el-radio-button>
        <el-radio-button label="3"></el-radio-button>
        <el-radio-button label="4"></el-radio-button>
      </el-radio-group>
    </el-radio-group>
    <div id="mychart"></div>
    <div id="mychart01"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialogVisible: false,
      addStr: [],
      index: 0,
      radio1: '1'
    }
  },
  mounted () {
    this.selectEchartArray()
    this.initEcharts01()
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    },

    addString () {
      this.addStr.push(this.index++)
    },
    closeWin () {},
    selectEchartArray () {
      if (this.radio1 === '1') {
        this.createCanvan({ xdata: ['上海', '北京'], ydata: [1, 1] })
      }
      if (this.radio1 === '2') {
        this.createCanvan({
          xdata: ['上海', '北京', '深圳'],
          ydata: [0, 1, 2]
        })
      }
      if (this.radio1 === '3') {
        this.createCanvan({
          xdata: ['上海', '北京', '深圳'],
          ydata: [10, 10, 2]
        })
      }
      if (this.radio1 === '4') {
        this.createCanvan({
          xdata: ['上海', '北京', '深圳', '四川'],
          ydata: [10, 10, 20, 26]
        })
      }
    },
    createCanvan (dataObj) {
      let ydata = []
      dataObj.ydata.map((item, index) => {
        let a = []
        for (let i = 0; i <= index; i++) {
          if (i !== index) {
            a.push(0)
          } else {
            a.push(item)
          }
        }
        ydata.push({
          data: a,
          type: 'bar',
          name: dataObj.xdata[index],
          stack: '鼓掌'
        })
      })
      console.log(dataObj.xdata)
      console.log(ydata)
      let mychart = echarts.init(document.getElementById('mychart'))
      mychart.setOption({
        xAxis: {
          type: 'category',
          data: dataObj.xdata,
          containLabel: true
        },
        legend: {
          origin: 'vertical',
          data: dataObj.xdata
        },
        yAxis: {
          type: 'value'
        },
        series: ydata
      })
    },
    initEcharts01 () {
      let mychart = echarts.init(document.getElementById('mychart01'), 'dark', {wdth: 400, height: 400})
      mychart.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: 'category' },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mychart {
  width: 1000px;
  height: 500px;
  border: 1px saddlebrown solid;
}
</style>
