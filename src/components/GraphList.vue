<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <div class="border">
          <router-view></router-view>
        </div>
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
            <h1>{{ graph.info.name }}</h1>
            <b-card-text>
              <h5>{{ graph.info.description }}</h5>
            </b-card-text>

            <router-link
              class="m-2 btn btn-dark"
              :to="{ name: 'show', params: { id: graph.info.id, graph } }"
              >See Graph</router-link
            >

            <router-link
              class="m-2 btn btn-info"
              :to="{
                name: 'statistics',
                params: { id: graph.info.id, graph },
              }"
              >See Statistics</router-link
            >
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // get the graphList from the store
    ...mapGetters(["graphList"]),
  },
};
</script>
<style scoped>
.graph {
  background-color: rgba(240, 240, 240, 0.596);
}
.graph:hover {
  background-color: rgba(214, 214, 214, 0.555);
}
</style>