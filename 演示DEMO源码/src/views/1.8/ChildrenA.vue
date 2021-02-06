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
    return {
      theme: this
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
        this.color = colorParam;
      } else {
        this.color = this.color === 'blue' ? 'red' : 'blue';
      }
    }
  }
};
</script>
