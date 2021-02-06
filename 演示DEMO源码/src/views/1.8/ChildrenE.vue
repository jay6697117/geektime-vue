<template>
  <div class="border2">
    <h3 :style="{ color: theme3.color }">E 结点</h3>
    <button @click="handleClick">改变color为{{ theme3.color === 'purple' ? 'green' : 'purple' }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme3: {
      from: 'theme2',
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      if (this.theme3.changeColor) {
        this.theme3.changeColor('green');
      }
    }
  }
};
</script>
