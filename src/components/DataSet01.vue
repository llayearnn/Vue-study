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
    this.test()

    const data = [
      {
        a: 1,
        b: 2,
        children: [
          {
            a: 1,
            b: 3
          }, {
            a: 1,
            b: 4
          }, {
            a: 1,
            b: 5,
            children: [
              {
                a: 5,
                b: 6
              }
            ]
          }

        ]
      }
    ]
    let dataList = [
      {
        id: 1,
        parentId: '0',
        children: [
          {
            id: 2,
            parentId: 1
          },
          {
            id: 3,
            parentId: 1
          },
          {
            id: 4,
            parentId: 1,
            children: [
              {
                id: 5,
                parentId: 4
              },
              {
                id: 6,
                parentId: 4
              }
            ]
          }
        ]
      },
      {
        id: 7,
        parentId: '0'
      }
    ]
    function look (data, id) {
      for (let i in data) {
        if (data[i].id === id) {
          data[i].children && setFlag(data[i].children, true)
        }
        if (data[i].children) {
          look(data[i].children, id)
        }
      }
      return data
    }

    function setFlag (data, flag) {
      for (let i in data) {
        data[i].flag = flag
        if (data[i].children) {
          setFlag(data[i].children, flag)
        }
      }
      return data
    }
    console.log(look(dataList, 4))
    console.log(this.reduceFun(data))
    // const reduceData = data.reduce((last, cur) => {
    //   return [...last, {id: cur.id} ]
    // }, [])
    // console.log(this.lookForAllId(data))

    // const result = [1, 3, 4, 5, 3, 7, 8].reduce((last, cur) => {
    //   console.log('上一次的值', last)
    //   console.log('当期值', cur)
    //   return cur + last
    // })
    // console.log('结果', result)
  },
  methods: {
    test () {
      let dataList01 = [
        {
          id: 1,
          parentId: '0',
          children: [
            {
              id: 2,
              parentId: 1
            },
            {
              id: 3,
              parentId: 1
            },
            {
              id: 4,
              parentId: 1,
              children: [
                {
                  id: 5,
                  parentId: 4
                },
                {
                  id: 6
                }
              ]
            }
          ]
        },
        {
          id: 7,
          parentId: '0'
        }
      ]
      function find1 (data, id) {
        for (let i of data) {
          if (i.id === id) {
            // 如果找到了 则对其chuildren进行属性添加操作
            i.flag = true
            i.children && setTrue(i.children, true)
          }
          if (i.children) {
            // 递归
            find1(i.children, id)
          }
        }
        return data
      }
      function setTrue (data1, flag) {
        for (let i of data1) {
          i.flag = flag
          if (data1.children) {
            setTrue(i.childern, flag)
          }
        }
        return data1
      }
      // const test1 = find1(dataList, 4)
      console.log(find1(dataList01, 4))
    },
    openDialog () {
      this.dialogVisible = true
    },
    lookForAllId (data = [], arr = []) {
      for (let item of data) {
        console.log(item)
        arr.push({b: item.b})
        if (item.children && item.children.length) this.lookForAllId(item.children, arr)
      }
      return arr
    },
    reduceFun (data) {
      return data.reduce((last, cur) => {
        const x = [...last, {b: cur.b}, ...this.reduceFun(cur.children)]

        return x
      }, [])
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
