<template>
    <div class="product-view">
        <h1 class="product-title">Product details</h1>
        <div v-if="product" class="product-details">
            <div class="product-info">
                <h2>{{ product.title }}</h2>
                <p>{{ product.description }}</p>
                <div class="product-details-row">
                    <p>Price: {{ product.price }}€</p>
                    <p>Discount: {{ product.discountPercentage }}%</p>
                    <p>Rating: {{ product.rating }}</p>
                    <p>Stock: {{ product.stock }}</p>
                    <p>Brand: {{ product.brand }}</p>
                    <p>Category: {{ product.category }}</p>
                </div>
            </div>
            <div class="product-images">
                <img :src="product.images[activeImage]" :alt="product.title" class="main-image" />
                <div class="thumbnail-images">
                    <img v-for="(image, index) in product.images" :key="index" :src="image"
                        :alt="product.title + ' Image ' + (index + 1)" @click="changeImage(index)"
                        :class="{ 'active': activeImage === index }" />
                </div>
            </div>
        </div>
        <div v-else>
            <p>Product not found</p>
        </div>
    </div>
</template>
  
<script>
import productsData from '../json/products.json';

export default {
    name: 'ProductView',
    data() {
        return {
            product: null,
            activeImage: 0
        };
    },
    methods: {
        changeImage(index) {
            this.activeImage = index;
        }
    },
    created() {
        const productId = parseInt(this.$route.params.productId);
        this.product = productsData.find(product => product.id === productId);
    }
}
</script>
  
<style scoped>
@import '../css/styles.css';
</style>
  