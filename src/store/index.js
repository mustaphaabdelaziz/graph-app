import Vue from "vue";
import Vuex from "vuex";
// Importing array from local JSON file
import data from "../graphs.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    graphs: data,
    currentGraphID: 5,
  },
  mutations: {
    addGraph(state, payload) {
      console.log('CurrentID:', state.currentGraphID)
      state.graphs.push(payload.graph);
      state.currentGraphID++;
    },
    deleteGraph(state, payload) {
      state.graphs = state.graphs.filter(graph => graph.info.id != payload.id);
    },
    addNodeToGraph(state, payload) {
      for (const graph of state.graphs) {
        if (graph.info.id === payload.data.graphId) {
          graph.nodes.push({ id: payload.data.nodeId });
        }
      }
    },
    deleteNodeFromGraph(state, payload) {
      for (const graph of state.graphs) {
        if (graph.info.id === payload.data.graphId) {
          graph.nodes = graph.nodes.filter(node => node.id != payload.data.nodeId)
        }
      }
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
    getCurrentID(state) {
      return state.currentGraphID;
    }
  },

});
