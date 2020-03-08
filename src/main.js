import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(Router)

new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})

