const { dataTool } = require('echarts')

const obj = {
  a: 1,
  b: 2
}
for (let i in obj) {
  console.log(i)
  // console.log(obj[i]);
}

const a = {振动信号: 123, 气源压力: 99, 阀前温度: 23, 阀后温度: 44}
const data = []
for (let i in a) {
  console.log(i)
  data.push({name: i, value: a[i]})
}
console.log(data)
setTimeout(function () {
  console.log('定时器开始啦')
})

new Promise(function (resolve) {
  console.log('马上执行for循环啦')
  for (var i = 0; i < 10000; i++) {
    i == 99 && resolve()
  }
}).then(function () {
  console.log('执行then函数啦')
})

console.log('代码执行结束')

console.log('1')
setTimeout(function () {
  console.log('2')
  process.nextTick(function () {
    console.log('3')
  })
  new Promise(function (resolve) {
    console.log('4')
    resolve()
  }).then(function () {
    console.log('5')
  })
})
// process.nextTick(function () {
//   console.log('6')
// })
// new Promise(function (resolve) {
//   console.log('7')
//   resolve()
// }).then(function () {
//   console.log('8')
// })

setTimeout(function () {
  console.log('9')
  process.nextTick(function () {
    console.log('10')
  })
  new Promise(function (resolve) {
    console.log('11')
    resolve()
  }).then(function () {
    console.log('12')
  })
})
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 9000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 5000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log('errrrrrrrrrrror', error))

