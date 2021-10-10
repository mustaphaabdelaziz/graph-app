<template>
  <div class="node" :style="btnStyles" ref="node">
    <h1>{{ id }}</h1>
  </div>
</template>
<script>
export default {
  // props: ["id", "name", "right", "left", "top", "bottom"],
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
  computed: {
    btnStyles() {
      return {
        "background-color": this.bgColor,
      };
    },
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

  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: rgb(52, 163, 111);
  color: white;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.node:hover {
  background-color: rgb(157, 212, 186);
}
.node h1 {
  /* margin: 25px 25px; */
  padding: 20px 20px;
}
</style>