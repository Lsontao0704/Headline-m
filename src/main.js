import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import './styles/index.css'
// 加载vant组件库
import Vant from 'vant'
// 加载vant组件库样式
import 'vant/lib/index.css'
// 自动设置REM基准值（html标签字体大小）
import 'amfe-flexible'
// 全局注册Vant中组件
Vue.use(Vant)

Vue.config.productionTip = false

// $mount()
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
