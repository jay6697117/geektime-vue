<template>
  <div>
    Computed1 fullName:
    <span style="background:#ccc">{{ fullName }}</span>
    <div>
      firstName:
      <input v-model="firstName" />
    </div>
    <div>
      lastName:
      <input v-model="lastName" />
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      firstName: 'Foo',
      lastName: 'Bar'
    };
  },
  computed: {
    fullName: function() {
      return this.firstName + '--' + this.lastName;
    }
  },
  watch: {
    fullName: function(newVal, oldVal) {
      console.log('fullName newVal :>> ', newVal);
      console.log('fullName oldVal :>> ', oldVal);
    }
  }
};
</script>
