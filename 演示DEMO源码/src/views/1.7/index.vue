<template>
  <a-tabs>
    <a-tab-pane key="BuildInDirectives" tab="内置指令">
      <BuildInDirectives />
    </a-tab-pane>
    <a-tab-pane key="CustomerDirectives" tab="自定义指令">
      <CustomerDirectives />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import BuildInDirectives from './BuildInDirectives';
import CustomerDirectives from './CustomerDirectives';
export default {
  components: {
    BuildInDirectives,
    CustomerDirectives
  }
};
</script>
