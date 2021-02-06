<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">I 结点6</h3>
  </div>
</template>

<script>
export default {
  inject: {
    theme: {
      from: 'theme',
      default: () => ({})
    }
  }
};
</script>
