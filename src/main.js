// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$myBoolean = true

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  //   安装全局事件总线 GlobalEventsBus
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  template: '<App/>'
})
