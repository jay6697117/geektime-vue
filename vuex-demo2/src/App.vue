<template>
  <div id="app">
    <h3>count: {{ count }}</h3>
    <!-- <h3>doubleCount: {{ doubleCount }}</h3> -->

    <hr />

    <button @click="$store.commit('increment')">count++</button>
    <!-- <button @click="$store.dispatch('increment')">count++</button> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count() {
      return this.$store.state.count;
    }
    // doubleCount() {
    //   return this.$store.getters.doubleCount;
    // }
  }
};
</script>

<style></style>
