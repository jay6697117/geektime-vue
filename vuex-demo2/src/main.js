import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from './min-vuex';
// console.log('Vuex :>> ', Vuex);
import App from './App.vue';
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // getters: {
  //   doubleCount: function (state) {
  //     return state.count * 2;
  //   }
  // },
  mutations: {
    increment: function (state, payload) {
      state.count += payload;
    }
  },
  // actions: {
  //   increment: function ({ commit }) {
  //     setTimeout(() => {
  //       commit('increment', 10);
  //     }, 500);
  //   }
  // }
});

Vue.prototype.$store = store;

new Vue({
  // store,
  render: h => h(App)
}).$mount('#app');
