<template>
  <div id="app">
    <a :href="url" target="_blank">{{ title }}</a>
    <hr />
    <h2>router demo</h2>
    <router-view class="rv-router-demo"></router-view>
  </div>
</template>

<script>
//根组件
export default {
  name: 'App',
  data() {
    return {
      url: 'https://www.baidu.com/',
      title: 'Baidu'
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.url = 'https://learn.kaikeba.com/home';
      this.title = 'Kaikeba';
    }, 3000);
  }
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
