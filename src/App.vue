<template>
  <button @click="showAlert" style="position: absolute; top: 500px">
    show Alert
  </button>
</template>

<script>
import Alert from "./components/Alert.vue";

export default {
  name: "App",
  components: {
    Alert,
  },
  setup(props, ctx) {
    function showAlert() {
      ctx.$alert();
    }
    return {
      showAlert,
    };
  },
};
</script>

<style lang="css" scoped>
</style>
