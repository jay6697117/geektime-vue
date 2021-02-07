<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="getEH3Ref">获取E h3 Ref</button>
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
  name: 'ChildrenA',
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide() {
    this.theme = Vue.observable({
      color: this.color,
      fontSize: this.fontSize
    });
    return {
      theme: this.theme,
      setChildrenRef: (name, ref) => {
        console.log('provide setChildrenRef name :>> ', name);
        console.log('provide setChildrenRef ref :>> ', ref);
        this[name] = ref;
      },
      getChildrenRef: name => {
        return this[name];
      },
      getRef: () => {
        return this;
      }
    };
  },
  data() {
    return {
      color: 'red',
      fontSize: '52px'
    };
  },
  methods: {
    getEH3Ref() {
      console.log(this.childrenE);
    }
  }
};
</script>
