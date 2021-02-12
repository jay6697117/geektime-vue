import Vue from 'vue';
import App from './App.vue';//根组件
import router from './router';

Vue.config.productionTip = false;

console.log('Vue.util :>> ', Vue.util);

//根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
