import Vue from "vue";
import Vuex from "vuex";
// Importing array from local JSON file
import data from "../graphs.js";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    graphs: data,
    currentGraphID: 5,
  },
  mutations,
  actions,
  getters,

});
