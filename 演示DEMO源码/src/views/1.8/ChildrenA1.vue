<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
import Vue from 'vue';
import ChildrenB from './ChildrenB';
import ChildrenC from './ChildrenC';
import ChildrenD from './ChildrenD';
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide() {
    console.log('provide this :>> ', this);
    this.theme = Vue.observable({
      color: this.color,
      changeColor: this.changeColor
    });
    return {
      // theme: this.theme
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
        // this.color = colorParam;
        this.theme.color = colorParam;
      } else {
        // this.color = this.color === 'blue' ? 'red' : 'blue';
        this.theme.color = this.theme.color === 'blue' ? 'red' : 'blue';
      }
    }
  }
};
</script>
