<template>
  <graph-manag :graph="$route.params.graph"></graph-manag>
</template>
<script>
import GraphManag from "../components/GraphManag.vue";
export default {
  components: {
    GraphManag,
  },
  
};
</script>