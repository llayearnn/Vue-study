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

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  //   安装全局事件总线 GlobalEventsBus
  beforeCreate () {
    /**
   * 在这里安装全局事件总线后，组建通信的使用方法就和自定义事件类似
   * 1.this.$bus.$on('hello',()=>{}) // 绑定自定义事件 hello
   * 2.this..$bus.$emit('hello',data) //触发事件 hello
   * 3.记得解绑 在用到的组件里解绑 beforeDestroy(){
   *            this.$bus.$off('hello')
   *           }
   */
    Vue.prototype.$bus = this
  },
  template: '<App/>'
})
