import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curParams() {
      return this.$route.params
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
