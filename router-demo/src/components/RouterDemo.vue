<template>
  <div class="rv-router-demo1">
    <router-link to="/foo">Go to Foo</router-link>
    <br />
    <hr />
    <router-link to="/user/12">Go to /user/12</router-link>
    <br />
    <router-link to="/user/12/profile">Go to /user/12/profile</router-link>
    <br />
    <router-link to="/user/14/posts">Go to /user/14/posts</router-link>
    <br />
    <hr />
    <router-link to="/other">Go to 404</router-link>
    <br />
    <router-link to="/a">Go to a 重定向到 bar</router-link>
    <br />
    <a href="#/foo">Go to Foo #</a>
    <br />
    <button @click="$router.push('/foo')">Go to Foo push</button>
    <p>id: {{ id }}</p>
    <p>{{ routerInfo }}</p>
    <router-view class="rv-router-children-demo"></router-view>
  </div>
</template>
<script>
export default {
  name: 'RouterDemo',
  props: ['id'],
  computed: {
    routerInfo() {
      console.log('RouterDemo this :>> ', this);
      const { fullPath, path, name, params, query, meta } = this.$route;
      return {
        fullPath,
        path,
        name,
        params,
        query,
        meta
      };
    }
  }
};
</script>
