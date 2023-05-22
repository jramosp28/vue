<template>
  <section class="categories-products-grid">
    <div class="container">
      <ul class="nav nav-pills categories-products-grid__categories" id="v-pills-categories-tab" role="tablist" aria-orientation="vertical">
        <li v-for="category in categories" :key="category.id" v-if="category && category.name" :class="['nav-link', 'categories-products-grid__category', { 'active': category.id === categories[0].id }]" :id="`v-pills-categories-${category.name.toLowerCase().replace(' ', '')}-tab`" data-bs-toggle="pill" :data-bs-target="`#v-pills-categories-${category.name.toLowerCase().replace(' ', '')}`" :aria-selected="category.id === categories[0].id">
          <span>{{ category.name }}</span>
        </li>
      </ul>
      <div class="tab-content" id="v-pills-categories-tabContent">
        <div v-for="category in categories" v-if="category" :key="category.id" :class="['tab-pane', 'fade', { 'show active': category.id === categories[0].id }]" :id="`v-pills-categories-${category.name.toLowerCase().replace(' ', '')}`" role="tabpanel" :aria-labelledby="`v-pills-categories-${category.name.toLowerCase().replace(' ', '')}-tab`" tabindex="0">
          <section class="products-grid">
            <article v-for="product in filteredProducts(category.id)" :key="product.id" class="product-card">
              <img :src="product.thumbnail" alt="Product Image" class="product-card__image">
              <h3 class="product-card__title">{{ product.title }}</h3>
              <p class="product-card__description">{{ product.description }}</p>
              <span class="product-card__price">{{ product.price }}</span>
              <button class="product-card__button">Agregar al carrito</button>
            </article>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  props: {
    products: Array,
    categories: Array
  },
  methods: {
    filteredProducts(categoryId) {
      const filtered = this.products.filter(product => product.category === categoryId);
      return filtered;
    }
  }
}
</script>

<style scoped>
@import '../css/styles.css';
</style>
