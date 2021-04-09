<template>
  <div class="project-wrapper m-0">
    <div class="project-content">
      <h1>Project</h1>
    </div>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active>
        <Cube/>
      </b-tab>
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    </b-tabs>
    <div></div>
  </div>
</template>

<script>
import Cube from "../components/Project/Cube.vue";

export default {
  data() {
    return {
      showWidget: "cube",
    };
  },
  components: {
    Cube,
  },
};
</script>

<style scoped>
.project-wrapper {
  height: 100vh;
}
</style>