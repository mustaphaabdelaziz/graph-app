export default {
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

}