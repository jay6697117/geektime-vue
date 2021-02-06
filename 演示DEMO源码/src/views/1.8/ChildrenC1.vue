<template>
  <div class="border1">
    <h2>C1 结点</h2>
    <ChildrenE />
    <ChildrenF />
  </div>
</template>
<script>
import Vue from 'vue';
import ChildrenE from './ChildrenE';
import ChildrenF from './ChildrenF';
export default {
  components: {
    ChildrenE,
    ChildrenF
  },
  data() {
    return {
      color: 'cyan'
    };
  },
  provide() {
    this.theme = Vue.observable({
      color: this.color
    });
    return {
      theme: this.theme,
      changeColor: this.changeColor
    };
  },
  methods: {
    changeColor(param) {
      console.log('ChildrenC changeColor param :>> ', param);
      if (param) {
        this.theme.color = this.theme.color === 'cyan' ? param : 'cyan';
      }
    }
  }
};
</script>
