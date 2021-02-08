import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from './min-vuex';
import App from './App.vue';
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // getters: {
  //   doubleCount(state) {
  //     return state.count * 2;
  //   }
  // },
  mutations: {
    increment(state) {
      state.count += 1;
    }
  }
  // actions: {
  //   increment({ commit }) {
  //     setTimeout(() => {
  //       commit('increment');
  //     }, 500);
  //   }
  // }
});

Vue.prototype.$store = store;

new Vue({
  // store,
  render: h => h(App)
}).$mount('#app');
