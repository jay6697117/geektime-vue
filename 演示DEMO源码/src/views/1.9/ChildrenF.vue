<template>
  <div class="border2">
    <h3>F 结点</h3>
    <button @click="getARef">获取A Ref</button>
    <button @click="getHRef">获取H Ref</button>
    <button @click="getIRef">获取I Ref</button>
  </div>
</template>
<script>
export default {
  name: 'ChildrenF',
  components: {},
  inject: {
    // getParentRef: {
    //   from: 'getRef',
    //   default: () => {}
    // },
    // getParentChildrenRef: {
    //   from: 'getChildrenRef',
    //   default: () => {}
    // },
    getRef: {
      default: () => {}
    },
    getChildrenRef: {
      default: () => {}
    }
  },
  methods: {
    getARef() {
      // console.log(this.getParentRef());
      console.log(this.getRef());
    },
    getHRef() {
      // console.log(this.getParentChildrenRef('childrenH'));
      console.log(this.getChildrenRef('childrenH'));
    },
    getIRef() {
      // console.log(this.getParentChildrenRef('childrenI'));
      console.log(this.getChildrenRef('childrenI'));
    }
  }
};
</script>
