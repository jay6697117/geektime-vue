import Vue from 'vue';
import App from '@/App.vue';

// import TodoList from '@/components/TodoList.vue'
// import TodoItem from '@/components/TodoItem.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
// Vue.component('todo-list', TodoList); //注册全局组件
// Vue.component('todo-item', TodoItem); //注册全局组件
// Vue.component('hello-world', HelloWorld); //注册全局组件

import globalComponent from '@/components/install'
console.log('globalComponent :>> ', globalComponent);
Vue.use(globalComponent)

Vue.config.productionTip = false;

//根实例
new Vue({
  render: h => h(App)
}).$mount('#app');
