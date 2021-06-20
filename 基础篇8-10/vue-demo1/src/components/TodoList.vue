<template>
  <ul>
    <slot name="default" :msg="msg"></slot>
  </ul>
</template>
<script>
export default {
  name: 'TodoList',
  data: function() {
    return {
      msg: 'todo-list'
    };
  }
};
</script>
