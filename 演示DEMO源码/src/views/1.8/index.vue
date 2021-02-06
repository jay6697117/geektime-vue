<template>
  <div>
    <ChildrenA v-if="showA" />
    <ChildrenA1 v-else-if="!showA" />
  </div>
</template>
<script>
import ChildrenA from './ChildrenA';
import ChildrenA1 from './ChildrenA1';
export default {
  components: {
    ChildrenA,
    ChildrenA1
  },
  data() {
    return {
      showA: false
    };
  }
};
</script>
<style>
.border,
.border1,
.border2 {
  border: 1px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  border-color: #ccc;
}
.border2 {
  border-color: #eee;
}
</style>
