<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">F 结点</h3>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme: {
      from: 'theme',
      default: () => ({})
    }
  }
};
</script>
