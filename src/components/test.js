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
// for (let i in dataList) {
//   console.log(dataList[i])
// }
const reduceFun = (data) => {
  return data?.reduce((last, cur) => {
    return cur.children ? [...last, { id: cur.id }, ...reduceFun(cur.children)] : [...last, { id: cur.id }]
  }, [])
}
const mapFun = (data) => {
  return data?.reduce((last, cur) => {
    return [...last, { id: cur.id }, ...(cur.children && Array.isArray(cur.children) ? reduceFun(cur.children) : [])]
  }, [])
}
function lookForAllId (data = [], arr = []) {
  for (let item of data) {
    // 这里可以拼装你想要的数据
    arr.push({id: item.id})
    if (item.children && item.children.length) lookForAllId(item.children, arr)
  }
  return arr
}

function look (data, id) {
  console.log('传进来的id', id)
  for (let i of data) {
    if (i.id === id) {
      i.children && setFlag(i.children, true)
    }
    if (i.children) {
      look(i.children, id)
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
// console.log(look(dataList, 4))
// // console.log('mapFun', mapFun(dataList))
// // console.log('result', reduceFun(dataList))
// // console.log('lookForAllId', lookForAllId(dataList))
// console.log('1,2,3,4'.split(','))

let res
function getParent (data, id) {
  for (let i of data) {
    if (i.id === id) {
      if (i.parentId === '0') {
        res = i
        return res
      } else {
        getParent(data, i.parentId)
      }
    }
  }
  return res
}

function find1 (data, id) {
  for (let i of data) {
    if (data.id === id) {
      data.children && setTrue(i.children, true)
    }
    if (i.childern) {
      find1(i.children, id)
    }
  }
  return data
}
function setTrue (data, flag) {
  for (let i of data) {
    i.flag = flag
    if (data.children) {
      setTrue(i.childern, flag)
    }
  }
  return data
}
const test1 = find1(dataList, 4)
console.log(test1[0].children[2].children)
