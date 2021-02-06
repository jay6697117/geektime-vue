<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="() => changeColor('red')">改变color</button>
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
      theme: {
        color: this.colorObj.color
        // color: this.color
      }
    };
  },
  // provide() {
  //   return {
  //     theme: this
  //   };
  // },
  data() {
    return {
      colorObj: {
        color: 'blue'
      }
      // color: 'blue'
    };
  },
  methods: {
    changeColor(colorParam) {
      console.log('changeColor colorParam :>> ', colorParam);
      if (colorParam) {
        this.$set(this.colorObj, 'color', colorParam);
        // this.color = color;
      } else {
        this.$set(this.colorObj, 'color', this.colorObj.color === 'blue' ? 'red' : 'blue');
        // this.color = this.color === 'blue' ? 'red' : 'blue';
      }
    }
  }
};
</script>
