<template>
  <div class="border border-light rounded bg-light shadow-sm">
    <h1>{{$route.params.graph.info.name}}</h1>
     <graph :nodes="$route.params.graph.nodes"></graph>
  </div>
</template>
<script>
 import Graph from "../components/Graph.vue";
export default {
 components:{
  Graph
 }
}
</script>