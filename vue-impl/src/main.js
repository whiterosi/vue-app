import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import './util/rem'

Vue.config.productionTip = false
// alert(process.env.VUE_APP_BASEURL);

// 过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName]);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
