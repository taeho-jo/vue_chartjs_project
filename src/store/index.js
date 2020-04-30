import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    reData: [],
  },
  mutations: {
    insertData(state, payload) {
      state.data = payload;
    },
    changeData(state) {
      const arr = [...state.data].slice(0, 15);
      state.reData = state.reData.concat(arr);
    },
  },
  actions: {
    getData({ commit }) {
      axios
        .get(
          'https://api.sportsdata.io/v3/nba/scores/json/Players?key=df78610a9b784d68b0dad23a610f8648',
        )
        .then(res => {
          commit('insertData', res.data);
          commit('changeData');
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  modules: {},
});
