<template>
  <div>
    {{ $data }}
    <br />
    <button @click="() => (a += 1)">a+1</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function(val, oldVal) {
      this.b.c += 1;
      console.log('a val :>> ', val);
      console.log('a oldVal :>> ', oldVal);
    },
    'b.c': function(val, oldVal) {
      this.b.d += 1;
      console.log('b.c val :>> ', val);
      console.log('b.c oldVal :>> ', oldVal);
    },
    'b.d': function(val, oldVal) {
      this.e.f.g += 1;
      console.log('b.d val :>> ', val);
      console.log('b.d oldVal :>> ', oldVal);
    },
    e: {
      handler: function(val, oldVal) {
        this.h.push('😄');
        console.log('e val :>> ', val);
        console.log('e oldVal :>> ', oldVal);
      },
      deep: true
      // immediate: true
    },
    h(val, oldVal) {
      console.log('h val :>> ', val);
      console.log('h oldVal :>> ', oldVal);
    }
  },
  mounted() {
    window.vm = this;
  }
};
</script>
