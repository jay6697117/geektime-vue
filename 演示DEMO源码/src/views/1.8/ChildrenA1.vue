<template>
  <div class="border">
    <h1>A1 结点</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
    <ChildrenC1 />
    <ChildrenD />
  </div>
</template>
<script>
import Vue from 'vue';
import ChildrenB from './ChildrenB';
import ChildrenC1 from './ChildrenC1';
import ChildrenD from './ChildrenD';
export default {
  components: {
    ChildrenB,
    ChildrenC1,
    ChildrenD
  },
  provide() {
    console.log('provide this :>> ', this);
    this.theme = Vue.observable({
      color: this.color
    });
    return {
      theme: this.theme
    };
  },
  data() {
    return {
      color: 'blue'
    };
  },
  methods: {
    changeColor(colorParam) {
      console.log('changeColor colorParam :>> ', colorParam);
      if (colorParam) {
        this.theme.color = colorParam;
      } else {
        this.theme.color = this.theme.color === 'blue' ? 'red' : 'blue';
      }
    }
  }
};
</script>
