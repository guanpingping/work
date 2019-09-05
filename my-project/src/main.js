import Vue from 'vue'
import App from './App.vue'
import router from './router.js';

// import global from './components/Global.vue'
// Vue.prototype.GLOBAL = global;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
