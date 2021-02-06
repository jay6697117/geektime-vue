<template>
  <div class="border2">
    <h3 :style="{ color: theme.color, fontSize: theme.fontSize }">I 结点</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: () => ({})
    }
  }
};
</script>
