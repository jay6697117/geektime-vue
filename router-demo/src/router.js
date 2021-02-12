import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const RouterDemo = import('./components/RouterDemo');
const RouterChildrenDemo = import('./components/RouterChildrenDemo');

const routes = [
  { path: '/foo', component: RouterDemo, name: '1' },
  { path: '/bar', component: RouterDemo, name: '2' },
  // 当 /user/:id 匹配成功，
  // RouterDemo 会被渲染在 App 的 <router-view /> 中
  {
    path: '/user/:id',
    component: RouterDemo,
    name: '3',
    props: true,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
        path: 'profile',
        component: RouterChildrenDemo,
        name: '3-1'
      },
      {
        // 当 /user/:id/posts 匹配成功
        // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
        path: 'posts',
        component: RouterChildrenDemo
      }
    ]
  },
  { path: '/a', redirect: '/bar' },
  { path: '*', component: RouterDemo, name: '404' }
];

console.log('process.env :>> ', process.env);
console.log('process.env.BASE_URL :>> ', process.env.BASE_URL);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
