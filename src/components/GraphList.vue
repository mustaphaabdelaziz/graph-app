<template>
  <b-container>
    <b-row align-h="start">
      <b-col cols="12">
        <router-view></router-view>
        <div
          class="m-2 rounded"
          v-for="graph in graphList"
          :key="graph.info.id"
        >
          <b-card
            class="shadow-sm graph"
            border-variant="light"
            text-variant="dark"
            
          >
          <h1>{{graph.info.name}}</h1>
            <b-card-text>
              <h5>{{ graph.info.description }}</h5>
            </b-card-text>
            <b-button variant="dark" class="m-3">
              <router-link
                class="text-decoration-none"
                :to="{ name: 'show', params: { id: graph.info.id, graph } }"
                >See Graph</router-link
              >
            </b-button>
            <b-button variant="info">
              <router-link
                class="text-decoration-none"
                :to="{
                  name: 'statistics',
                  params: { id: graph.info.id, graph },
                }"
                >See Statistics</router-link
              >
            </b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["list"],
  computed: {
    // graphList(){
    //   return this.$store.getters.graphList;
    // }
    ...mapGetters(["graphList"]),
  },
};
</script>
<style scoped>
a {
  color: white;
}
.graph {
  background-color: rgba(240, 240, 240, 0.596);
}
.graph:hover {
  background-color: rgba(214, 214, 214, 0.555);
}
</style>