<template>
  <div id="app">
    <h3>count 1: {{ $store.state.count }}</h3>
    <h3>count 2: {{ count }}</h3>
    <br />
    <h3>doubleCount 1: {{ $store.getters.doubleCount }}</h3>
    <h3>doubleCount 2: {{ doubleCount }}</h3>
    <br />
    <button @click="$store.commit('increment', 1)">count++</button>
    &nbsp;
    <button @click="$store.dispatch('increment', 1)">count++</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    }
  }
};
</script>

<style></style>
