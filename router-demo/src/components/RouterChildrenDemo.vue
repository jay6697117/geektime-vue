<template>
  <div class="rv-router-children-demo">
    {{ routerInfo }}
  </div>
</template>
<script>
export default {
  name: 'RouterChildrenDemo',
  computed: {
    routerInfo() {
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
