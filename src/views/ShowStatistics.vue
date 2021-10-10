<template>
  <statistics :graph="$route.params.graph"></statistics>
</template>
<script>
import Statistics from "../components/Statistics.vue";
export default {
  components: {
    Statistics,
  },
};
</script>