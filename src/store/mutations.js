export default {
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
}