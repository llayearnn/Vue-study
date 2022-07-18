let dataList = [
  {
    id: 1,
    parentId: '0',
    age: 13,
    children: [
      {
        id: 2,
        parentId: 1,
        age: 14
      },
      {
        id: 3,
        age: 15,
        parentId: 1
      },
      {
        id: 4,
        age: 16,
        parentId: 1,
        children: [
          {
            id: 5,
            age: 17,
            parentId: 4,
            flag: true
          },
          {
            id: 6,
            age: 18,
            parentId: 4,
            flag: true
          }
        ]
      }
    ]
  },
  {
    id: 7,
    age: 19,
    parentId: '0',
    children: [
      {
        id: 8,
        parentId: 7,
        age: 120
      },
      {
        id: 9,
        age: 15,
        parentId: 7
      },
      {
        id: 10,
        age: 16,
        parentId: 7,
        children: [
          {
            id: 11,
            age: 18,
            parentId: 10
          }
        ]
      }
    ]
  },
  {
    id: 12,
    age: 18,
    parentId: '0'
  }
]
const data = []
function flatArr (treeData) {
  treeData && treeData.map(item => {
    data.push({
      id: item.id,
      parentId: item.parentId
    })
    flatArr(item.children)
  })
  return data
}

// console.log(flatArr(dataList))
// console.log('mapFun', mapFun(dataList))
// console.log('result', reduceFun(dataList))
// console.log('lookForAllId', lookForAllId(dataList))

function flatArr01 (tree) {
  return tree.reduce((last, cur) => {
    return [...last, {...cur, children: null}, ...(cur.children && Array.isArray(cur.children) ? flatArr01(cur.children) : [])]
  }, [])
}
function getParent (data, id, res1) {
  for (let i of data) {
    if (i.id === id) {
      if (i.parentId === '0') {
        res1 = i
        // return e.id;
        return res1
      } else {
        getParent(data, i.parentId, res1)
      }
    }
  }
  return res1
}

const flatArrData = flatArr01(dataList)
console.log(flatArrData)
console.log(getParent(flatArrData, 9))

const aa = ['1', '2', '3', '4']
const bb = ['1', '2', '5']
const cc = aa.filter((el) => !bb.includes(el))
console.log(cc)
