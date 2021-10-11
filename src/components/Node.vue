<template>
  <div class="node" ref="node">
    <h1>{{ id }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    bgColor: {
      type: String,
      // default: "#0099CC",
    },
  },
  data() {
    return {
      neighbors: [],
      // right: 0,
      // left: 0,
      // top: 0,
      // bottom: 0,
    };
  },
  methods: {
    calPosition() {
      var rect = this.$refs["node"].getBoundingClientRect();
      console.log(
        "top:",
        rect.top,
        "right:",
        rect.right,
        "bottom:",
        rect.bottom,
        "left:",
        rect.left
      );
    },
  },
  mounted() {
    this.calPosition();
  },
};
</script>
<style scoped>
.node {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  /* background-color: rgb(52, 163, 111); */
  background-color: rgb(15, 150, 160);
  color: white;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.node:hover {
  opacity: 0.7;
}
.node h1 {
  /* margin: 25px 25px; */
  padding: 15px 15px;
}
</style>