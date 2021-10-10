<template>
  <div>
    <h1 class="font-weight-bold">{{ graph.info.name }}</h1>
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th colspan="2">Node ID</b-th>
          <b-th colspan="2">Node neighbors</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="node in nodeRelation" :key="node.id">
          <b-td colspan="2">{{ node.id }}</b-td>
          <b-td colspan="2">{{ node.neighbors }}</b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="2" variant="secondary">
            Number of Node: <b>{{ graph.nodes.length }}</b>
          </b-td>
          <b-td colspan="2" variant="secondary">
            Number of relations: <b>{{ graph.relations.length }}</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
    <div class="m-3">
      <b-button class="m-2" variant="outline-danger" @click="deleteGraph"
        >Delete {{ graph.info.name }}</b-button
      >

      <router-link
        class="btn btn-outline-warning"
        :to="{ name: 'edit', params: { id: graph.info.id, graph } }"
      >
        Edit {{ graph.info.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["graph"],
  computed: {
    nodeRelation() {
      const nodeNeighbors = [];
      for (let node of this.graph.nodes) {
        let list = { id: node.id, neighbors: [] };
        for (let relation of this.graph.relations) {
          if (node.id === relation.right) list.neighbors.push(relation.left);
          else if (node.id === relation.left)
            list.neighbors.push(relation.right);
        }
        nodeNeighbors.push(list);
      }
      return nodeNeighbors;
    },
  },
  methods: {
    deleteGraph() {
      // delete the graph from the store
      this.$store.dispatch({ type: "deleteGraph", id: this.graph.info.id });
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>