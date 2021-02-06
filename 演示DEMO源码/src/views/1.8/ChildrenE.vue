<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">E 结点</h3>
    <button @click="handleClick">改变color为{{ theme.color === 'cyan' ? 'green' : 'cyan' }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme: {
      from: 'theme',
      default: () => ({})
    },
    changeColor: {
      from: 'changeColor',
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      if (this.changeColor) {
        this.changeColor('green');
      }
    }
  }
};
</script>
