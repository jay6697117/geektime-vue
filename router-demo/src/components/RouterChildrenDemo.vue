<template>
  <div class="rv-router-children-demo1">
    {{ routerInfo }}
  </div>
</template>
<script>
export default {
  name: 'RouterChildrenDemo',
  computed: {
    routerInfo() {
      console.log('RouterChildrenDemo this._routerRoot._route :>> ', this._routerRoot._route);
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
