import Vue from "vue";
import Vuex from "vuex";
// Importing array from local JSON file
import data from "../graphs.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    graphs:data,
    toggled:false
  },
  mutations: {
    addGraph(state, payload) {
      state.graphs.push(payload);
    },
    deleteGraph(state, payload) {
      console.log("Old list:", state.graphs.length);
      console.log("payload:", payload.id);

      state.graphs = state.graphs.filter(graph => graph.info.id != payload.id);
      console.log("new list:", state.graphs.length);
    },
    addNodeToGraph(state, payload) {
      state.graphs = state.graphs.filter(graph => {
        if (graph.id === payload.graphId) {
          graph.nodes.push({ id: payload.nodeId });
        }
      })
    },
    deleteNodeFromGraph(state, payload) {
      state.graphs = state.graphs.filter(graph => {
        if (graph.id === payload.graphId) {
          graph.nodes = graph.nodes.filter(node => node.id != payload.nodeId)
        }
      })
    },
  },
  actions: {
    addGraph(context, payload) {
      context.commit("addGraph", payload);
    },
    deleteGraph(context, payload) {
      context.commit("deleteGraph", payload);
    },
    addNodeToGraph(context, payload) {
      context.commit("addNodeToGraph", payload);
    },
    deleteNodeFromGraph(context, payload) {
      context.commit("deleteNodeFromGraph", payload);
    },

  },
  getters: {
    graphList(state) {
      return state.graphs;
    },
  },

});
