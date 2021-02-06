<template>
  <div class="border1">
    <h2>C 结点</h2>
    <ChildrenE />
    <ChildrenF />
  </div>
</template>
<script>
import ChildrenE from './ChildrenE';
import ChildrenF from './ChildrenF';
export default {
  components: {
    ChildrenE,
    ChildrenF
  },
  data() {
    return {
      color: 'purple'
    };
  },
  provide() {
    return {
      theme2: this
    };
  },
  methods: {
    changeColor(param) {
      console.log('ChildrenC changeColor param :>> ', param);
      if (param) {
        this.color = this.color === 'purple' ? param : 'purple';
      }
    }
  }
};
</script>
