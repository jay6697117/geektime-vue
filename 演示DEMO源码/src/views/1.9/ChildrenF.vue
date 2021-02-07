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
    getParentRef: {
      from: 'getRef',
      default: () => {}
    },
    getParentChildrenRef: {
      from: 'getChildrenRef',
      default: () => {}
    }
  },
  methods: {
    getARef() {
      console.log(this.getParentRef());
    },
    getHRef() {
      console.log(this.getParentChildrenRef('childrenH'));
    },
    getIRef() {
      console.log(this.getParentChildrenRef('childrenI'));
    }
  }
};
</script>
