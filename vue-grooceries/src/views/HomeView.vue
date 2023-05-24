<template>
  <main class="main-body">
    <Carousel />
    <Offerts />
    <Products :categories="categories" :products="products" />
    <Newsletter />
  </main>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Offerts from '../components/Offerts.vue';
import Products from '../components/Products.vue';
import Newsletter from '../components/Newsletter.vue';
import categoriesData from '@/json/categories.json';
import productsData from '@/json/products.json';

export default {
  name: 'HomeView',
  components: {
    Carousel,
    Offerts,
    Products,
    Newsletter
  },
  data() {
    return {
      categories: [],
      products: []
    };
  },
  created() {
    this.categories = categoriesData;
    this.products = productsData;
    console.log('Categories:', this.categories);
    console.log('Products:', this.products);
  }
}
</script>

<style scoped>
@import '../css/styles.css';
</style>
