<template>
  <section class="categories-products-grid">
    <div class="container">
      <ul class="nav nav-pills categories-products-grid__categories" id="v-pills-categories-tab" role="tablist" aria-orientation="vertical">
        <li v-for="(category, index) in categories" :key="index" :class="['nav-link', 'categories-products-grid__category', { 'active': index === 0 }]" :id="'v-pills-categories-' + formatId(category) + '-tab'" data-bs-toggle="pill" :data-bs-target="'#v-pills-categories-' + formatId(category)" aria-selected="true">
          <span>{{ category }}</span>
        </li>
      </ul>
      <div class="tab-content" id="v-pills-categories-tabContent">
        <div v-for="(category, index) in categories" :key="index" :id="'v-pills-categories-' + formatId(category)" class="tab-pane fade" :class="{ 'show active': index === 0 }" :aria-labelledby="'v-pills-categories-' + formatId(category) + '-tab'" tabindex="0">
          <section class="products-grid">
            <article v-for="product in getProductsByCategory(category)" :key="product.id" class="product-card">
              <router-link :to="{ name: 'ProductView', params: { productId: product.id } }">
                <div class="product-card__top">
                  <div class="product-card__image">
                    <img :src="product.thumbnail" :alt="product.title" />
                    <div class="product-card__discount">
                      <span>{{ product.discountPercentage }}%</span>
                    </div>
                  </div>
                </div>
                <div class="product-card__bottom">
                  <div class="product-card__description">
                    <div class="product-card__rating"></div>
                    <div class="product-card__description">
                      <h2>{{ product.title }}</h2>
                      <p>{{ product.description }}</p>
                    </div>
                  </div>
                  <div class="product-card__price">
                    <span>{{ product.price }}€</span>
                  </div>
                </div>
              </router-link>
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
    categories: { type: Array, required: true },
    products: { type: Array, required: true }
  },
  methods: {
    formatId(category) {
      return category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    },
    getProductsByCategory(category) {
      return this.products.filter(product => product.category === category);
    }
  }
}
</script>

<style scoped>
@import '../css/styles.css';
</style>
