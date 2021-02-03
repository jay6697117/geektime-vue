<template>
  <li>
    <slot name="pre-icon" :icon="icon"> #默认前置图标# </slot>
    <span class="red" v-if="!del">{{ title }}</span>
    <span v-else style="text-decoration: line-through">{{ title }}</span>
    <slot name="suf-emoji" :emoji="emoji"> *默认后置表情* </slot>
    <button v-show="!del" @click="handleClick">删除</button>
  </li>
</template>
<script>
export default {
  name: 'TodoItem',
  data: function() {
    return {
      icon: Math.random(),
      emoji:'😢'
    };
  },
  props: {
    title: String,
    del: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick() {
      // eslint-disable-next-line no-console
      console.log('点击删除按钮');
      this.$emit('delete', this.title);
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}

button {
  margin-left: 5px;
}
</style>
