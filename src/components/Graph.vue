<template>
  <div class="home">
    <b-container>
      <b-row align-h="start">
        <node class="m-2"
          v-for="node in nodes"
          :key="node.id"
          :id="node.id"
        >
        </node>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// @ is an alias to /src
import Node from "./Node.vue";
// import data from "../data.json";
export default {
  name: "Graph",
  components: {
    Node,
  },
  props: ["nodes"],
  // data() {
  //   return { graph: data.graph };
  // },
  methods: {
    generate() {
      return Math.floor(Math.random() * 1000);
    },
  },
};
</script>
