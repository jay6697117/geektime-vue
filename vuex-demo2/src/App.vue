<template>
  <div id="app">
    <h3>count: {{ count }}</h3>
    <hr />
    <button @click="$store.commit('increment', 5)">count++</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style></style>
