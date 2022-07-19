import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestDemo from '@/components/TestDemo'
import LoginTest from '@/components/LoginTest'
import Keyboard from '@/components/Keyboard'
import MyFilter from '@/components/MyFilter'
import MyUpdate from '@/components/myUpdate'
import DataChange from '@/components/DataChange'
import EmitComponent from '@/components/EmitComponent'
import Pubsub from '@/components/pubsub/index'
import Machine from '@/components/machine'
import ElementComponents from '@/components/elementComponents'
import DataSet01 from '@/components/DataSet01'
import ParentCom from '../components/ComponentCommunication/绑定自定义事件/ParentCom.vue'
import ParentComPublishSubscription from '../components/ComponentCommunication/绑定自定义事件-refs/ParentCom.vue'
import GlobalParentCom from '@/components/ComponentCommunication/全局事件总线/安装全局事件总线/ParentCom.vue'
import PubsubPublishCom from '@/components/ComponentCommunication/全局事件总线/发布订阅模式/ParentCom.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TestDemo',
      component: TestDemo
    },
    {
      path: '/loginTest',
      name: 'LoginTest',
      component: LoginTest
    },
    {
      path: '/keyboard',
      name: 'Keyboard',
      component: Keyboard
    },
    {
      path: '/filter',
      name: 'MyFilter',
      component: MyFilter
    },
    {
      path: '/update',
      name: 'MyUpdate',
      component: MyUpdate
    },
    {
      path: '/data-change',
      name: 'DataChange',
      component: DataChange
    },
    {
      path: '/emit-send',
      name: 'EmitComponent',
      component: EmitComponent
    },
    {
      path: '/pubsub',
      name: 'Pubsub',
      component: Pubsub
    },
    {
      path: '/machine',
      name: 'Machine',
      component: Machine
    },
    {
      path: '/element-ui',
      name: 'ElementComponents',
      component: ElementComponents
    },
    {
      path: '/echarts/dataset-01',
      name: 'DataSet01',
      component: DataSet01
    },
    // 组建通信 - 自定义事件 @/v-on
    {
      path: '/component-communication/ParentCom-mystyle',
      name: 'ParentCom',
      component: ParentCom
    },
    // 组建通信 - 自定义事件-refs
    {
      path: '/component-communication/ParentCom-Publish-subscription',
      name: 'ParentComPublishSubscription',
      component: ParentComPublishSubscription
    },
    // 全局时间总线
    {
      path: '/component-communication/ParentCom-Global',
      name: 'GlobalParentCom',
      component: GlobalParentCom
    },
    // 消息发布订阅模式
    {
      path: '/component-communication/pubsub-publish',
      name: 'PubsubPublishCom',
      component: PubsubPublishCom
    }
  ]
})
