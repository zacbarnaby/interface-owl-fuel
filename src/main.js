import Vue from 'vue'
import App from './App.vue'

require('bootstrap-4-grid/css/grid.min.css');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
