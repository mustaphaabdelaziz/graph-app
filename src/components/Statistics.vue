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
        <!-- <b-th rowspan="2">Number of Node</b-th>
        <b-tr>
          <b-td colspan="2">{{ graph.nodes.length }}</b-td>

        </b-tr> -->
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
      <!-- <button @click="deleteGraph" class="btn btn-danger">Delete Graph</button> -->
      <b-button class="m-2" variant="outline-danger" @click="deleteGraph">Delete {{graph.info.name}}</b-button>
      <b-button class="m-2" variant="outline-warning" @click="deleteGraph">Edit {{graph.info.name}}</b-button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["graph"],

  computed: {
    nodeRelation() {
      // console.log("graph info:",this.graph.info.name)
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
  methods:{
    deleteGraph(){
      // alert("Graph"+this.graph.info.id+" deleted")
      this.$store.dispatch({ type: "deleteGraph", id: this.graph.info.id})
      this.$router.push({ path: '/' })
    }
  }
};
</script>
