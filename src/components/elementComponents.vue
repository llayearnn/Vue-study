<template>
    <el-row class="block-col-2">
    <el-col :span="12">
        <span class="demonstration">hover 激活</span>
        <el-dropdown>
        <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </el-col>
    <el-col :span="12">
        <span class="demonstration">click 激活</span>
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided >黄金糕</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item divided border icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'ElementComponents',
  data () {
    return {
      msg: '0'
    }
  },
  methods: {
    test () {
      let dataList01 = [
        {
          id: 1,
          parentId: '0',
          label: 'A1',
          children: [
            {
              id: 2,
              label: 'B1',
              parentId: 1
            },
            {
              id: 3,
              label: 'B2',
              parentId: 1
            },
            {
              id: 4,
              label: 'B2',
              parentId: 1,
              children: [
                {
                  id: 5,
                  label: 'C1',
                  parentId: 4
                },
                {
                  id: 6,
                  label: 'C2',
                  parentId: 4
                }
              ]
            }
          ]
        },
        {
          id: 7,
          label: 'A2',
          parentId: '0'
        }
      ]
      function flatArr (tree) {
        return tree.reduce((last, cur) => {
          return [...last, {...cur, children: null}, ...(cur.children && Array.isArray(cur.children) ? flatArr(cur.children) : [])]
        }, [])
      }
      let str = ''
      function getAllLabel (data, id) {
        for (let i of data) {
          if (i.id === id) {
            str = i.label + '/' + str
            if (i.parentId === '0') {
              return str
            } else {
              getAllLabel(data, i.parentId)
            }
          }
        }
      }
      const newData = flatArr(dataList01)
      console.log(newData)
      getAllLabel(newData, 6)
      console.log(str)
      // console.log(newData)
    }
  },
  created () {
    this.test()
    // const a = [2, 3, 4]
    // const b = a.slice(0, 1)
    // console.log(a)
    // console.log(b)
  }

}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
