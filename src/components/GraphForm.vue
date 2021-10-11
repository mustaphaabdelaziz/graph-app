<template>
  <div class="col-6 m-auto border border-light rounded bg-light shadow-sm">
    <h2>Create a Graph</h2>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="name-input">
        <b-form-input
          id="name"
          v-model="name"
          placeholder="Graph name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="description-input">
        <b-form-input
          id="description"
          v-model="description"
          placeholder="Description"
          required
        ></b-form-input>
      </b-form-group>
      <div class="m-4">
        <b-button class="w-100" type="submit" variant="info">Add Node</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import{ mapGetters} from "vuex"
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  computed:{
    ...mapGetters(["getCurrentID"])
  },
  methods: {
    onSubmit() {
      this.$store.dispatch({
        type: "addGraph",
        graph: {
          info: {
            id: this.getCurrentID,
            name: this.name,
            description: this.description,
          },
          nodes: [],
          relations: [],
        },
      });
      this.name = "";
      this.description = "";
      this.$router.push({ path: "/" });
    },
  },
};
</script>