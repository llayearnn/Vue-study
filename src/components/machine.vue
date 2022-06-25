<template>
    <div class="box">
      <div class="top">
        头部
      </div>
      <!-- <div class="top">
          <span class="demonstration">单选选择任意一级选项</span>
          <el-cascader
              v-model="radio"
              :options="options"
              :props="{checkStrictly: true }"
              clearable></el-cascader>
              <el-button v-show="ifHidden" type="primary" @click="handleSearch">
              搜索
          </el-button>
      </div>
      <div class="block">
        <span class="demonstration">多选选择任意一级选项</span>
        <el-cascader
            :options="options"
            v-model="radio"
            :props="{ multiple: true, checkStrictly: true }"
            clearable>
        </el-cascader>
      </div> -->
      <div class="bottom">
        底部
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致',
            children: [{
              value: 'shejiyuanzeChild1',
              label: '设计原则-子选项01'
            }, {
              value: 'shejiyuanzeChild2',
              label: '设计原则-子选项02'
            }
            ]
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      radio: []
    }
  },
  methods: {
    handleSearch () {
      console.log(this.radio.slice(-1))
    }
  },
  computed: {
    ifHidden () {
    //   return this.radio.length !== 0
      return this.radio.length
    }
  },
  watch: {
    radio (val) {
    //   const arr = [1, 2, 3, 4, 5, 6]
    //   const arr = []
    //   const lastOne = arr.slice(-1)
    //   console.log(arr)
    //   console.log(lastOne)
      console.log(val)
    }
  }
}
</script>
<style scope>
.box{
  /* width:100vw; */
  height:100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}
.top{
  width:100%;
  height:200px;
  overflow: auto;
  display: flex;
  background-color: aquamarine;
  border: 1px solid black;
  margin-bottom: 20px;
}
.bottom{
  flex:1;
  background-color: rgb(255, 127, 165);
  border: 1px solid black;
}
.el-cascader-panel .el-radio {
    width: 100%;
    height: 100%;
    z-index: 10;
    border: 1px solid black;
    position: absolute;
    top:10px;
    right: 10px;
}
.el-cascader-panel .el-radio__input {
    visibility: hidden;
}
.el-cascader-panel .el-cascader-node__postfix {
     top:10px;
}

</style>
