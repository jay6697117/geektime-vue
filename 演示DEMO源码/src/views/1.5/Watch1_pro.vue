<template>
  <div>
    fullName:
    <span style="background:#ccc;padding:2px 5px;">{{ fullName }}</span>
    <hr />
    <div>
      firstName:
      <input v-model="firstName" />
    </div>
    <div>
      lastName:
      <input v-model="lastName" />
    </div>
    <hr />
    <h2>firstTimeout: {{ firstTimeout }}</h2>
    <h2>lastTimeout: {{ lastTimeout }}</h2>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo--Bar',
      firstTimeout: null,
      lastTimeout: null
    };
  },
  watch: {
    firstName: function(val) {
      clearTimeout(this.firstTimeout);
      this.firstTimeout = setTimeout(() => {
        this.fullName = val + '--' + this.lastName;
      }, 300);
    },
    lastName: function(val) {
      clearTimeout(this.lastTimeout);
      this.lastTimeout = setTimeout(() => {
        this.fullName = this.firstName + '--' + val;
      }, 300);
    }
  },
  mounted() {
    window.vm = this;
  }
};
</script>
