const TodoList = () => import('@/components/TodoList.vue');
const TodoItem = () => import('@/components/TodoItem.vue');
const HelloWorld = () => import('@/components/HelloWorld.vue');

// import TodoList from '@/components/TodoList.vue'
// import TodoItem from '@/components/TodoItem.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

const globalComponent = {
  install(Vue) {
    Vue.component('todo-list', TodoList); //注册全局组件
    Vue.component('todo-item', TodoItem); //注册全局组件
    Vue.component('hello-world', HelloWorld); //注册全局组件
  }
};

export default globalComponent
