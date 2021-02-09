<template>
  <div>
    <h2>产品</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }}
        <br />
        <button :disabled="!product.inventory" @click="addProductToCart(product)">
          加入购物车
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    }
    // ...mapState({
    //   products: state => state.products.all
    // })
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('cart/addProductToCart', product);
    }
    // ...mapActions('cart', ['addProductToCart'])
  },
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
  mounted() {
    // console.log('products this :>> ', this);
  }
};
</script>
