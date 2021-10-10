<template>
  <div>
    <graph-list :list="graphs"> \</graph-list>
  </div>
</template>

<script>
import graphs from "../graphs.js";
import GraphList from "../components/GraphList.vue";
export default {
  name: "Home",
  components: {
    GraphList,
  },
  data() {
    return { graphs };
  },
};
</script>
<style scoped>
a {
  color: white;
}
</style>