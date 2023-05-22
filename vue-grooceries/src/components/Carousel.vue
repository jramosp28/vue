<template>
  <div id="carouselFeatured" class="carousel carousel-dark slide carousel-featured" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" :data-bs-target="'#carouselFeatured'" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" :data-bs-target="'#carouselFeatured'" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" :data-bs-target="'#carouselFeatured'" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="@/assets/images/featured/featured_clean.png" class="d-block" alt="...">
        <div class="carousel-caption d-md-block">
          <h5>Come clean with Zero Co</h5>
          <p>Take a load off mother earth</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="@/assets/images/featured/featured_iphone.png" class="d-block" alt="...">
        <div class="carousel-caption d-md-block">
          <h5>New iPhone</h5>
          <p>The best product at the best price</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="@/assets/images/featured/featured_laptop.png" class="d-block" alt="...">
        <div class="carousel-caption d-md-block">
          <h5>New ASUS V-100</h5>
          <p>The new versatile laptop</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselFeatured'" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="'#carouselFeatured'" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  // Otras opciones y lógica del componente
}
</script>

<style scoped>
@import '../css/styles.css';
</style>