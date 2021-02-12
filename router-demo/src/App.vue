<template>
  <div id="app">
    <h2>router demo</h2>
    <router-view class="rv-app"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.rv-app {
  background-color: #eee;
  padding: 10px 0;
}
</style>
