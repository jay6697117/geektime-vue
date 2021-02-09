<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>账号: {{ email }}</p>
    <hr />

    <ProductList />
    <hr />

    <ShoppingCart />
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  data() {
    return {
      text: '购物车示例'
    };
  },
  computed: {
    email() {
      return this.$store.state.userInfo.email;
    },
    title() {
      return this.text;
    }
  },
  // computed: mapState({
  //   email: state => state.userInfo.email,
  //   title: function() {
  //     return this.text;
  //   }
  // }),
  components: { ProductList, ShoppingCart },
  mounted() {
    window.vm = this._data;
    console.log('App this.$store :>> ', this.$store);
  }
};
</script>
