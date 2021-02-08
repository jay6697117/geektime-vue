import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // state() {
  //   return {
  //     count: 0
  //   };
  // },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state, num) {
      state.count += num;
    }
  },
  actions: {
    increment({ commit }) {
      new Promise(resolve => {
        setTimeout(resolve, 500);
      }).then(() => {
        commit('increment', 1);
      });
    }
  }
});

export default store;
