<template>
  <div>
    <b-container>
      <b-row align-h="start">
        <node class="m-2" v-for="node in nodes" :key="node.id" :id="node.id">
        </node>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Node from "./Node.vue";

export default {
  name: "Graph",
  components: {
    Node,
  },
  props: ["nodes"],
};
</script>
