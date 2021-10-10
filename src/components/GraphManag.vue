<template>
  <div>
    <h2>{{ graph.info.name }}</h2>
    <!-- <form> -->
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th colspan="1">Node ID</b-th>
          <b-th colspan="1">Delete</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="node in graph.nodes" :key="node.id">
          <b-td colspan="1">{{ node.id }}</b-td>
          <b-td colspan="1"
            ><b-button variant="danger" @click="deleteNode(node.id)"
              ><b-icon icon="trash-fill" aria-hidden="true"></b-icon></b-button
          ></b-td>
        </b-tr>
        <b-tr
          ><b-td colspan="1"
            ><b-button variant="success" @click="addNode"
              ><b-icon icon="plus-circle" aria-hidden="true"></b-icon> New
              Node</b-button
            ></b-td
          ></b-tr
        >
      </b-tbody>
    </b-table-simple>
    <!-- </form> -->
  </div>
</template>
<script>
export default {
  props: ["graph"],

  computed: {
    nbrNodes() {
      return this.graph.nodes.length;
    },
    maxNodes() {
      let values = [];
      for (const node of this.graph.nodes) {
        values.push(node.id);
      }
      return Math.max(...values);
    },
  },
  methods: {
    deleteNode(id) {
      this.$store.dispatch({
        type: "deleteNodeFromGraph",
        data: { graphId: this.graph.info.id, nodeId: id },
      });
    },
    addNode() {
      this.$store.dispatch({
        type: "addNodeToGraph",
        data: {
          graphId: this.graph.info.id,
          nodeId: this.maxNodes + 1,
        },
      });
    },
  },
};
</script>