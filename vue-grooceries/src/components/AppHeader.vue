<template>
  <header class="main-header">
    <nav class="navbar navbar-light navbar-header">
      <div class="container">
        <div class="logo">
          <a href="/">
            <img src="@/assets/images/logos/logo.svg" class="img-fluid logo-img logo-img--full" alt="logo">
            <img src="@/assets/images/logos/icon.svg" class="img-fluid logo-img logo-img--mobile" alt="logo">
          </a>
        </div>
        <form class="search">
          <input class="form-control" type="search" placeholder="Search for a product or inspiration">
          <div class="search__icon">
            <i class="fas fa-search"></i>
          </div>
        </form>
        <div class="user-options">
          <div class="user-options__item">
            <a href="" aria-label="Cart" class="nav-link"><i class="fas fa-cart-shopping fa-xl"></i></a>
          </div>
          <div class="user-options__item">
            <Auth @auth-action="handleAuthAction" />
          </div>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-categories">
      <div class="container">
        <a class="navbar-brand" href="#">Top categories</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Smartphones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Laptops</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fragances</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skincare</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Groceries</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home decoration</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Auth from './Auth.vue';

export default {
  name: 'AppHeader',
  components: {
    Auth,
  },
  methods: {
    handleAuthAction(action) {
      // Manejar la acción del componente Auth
      if (action === 'register') {
        // Realizar la lógica de redirección a la página de registro
        this.$router.push('/register');
      } else if (action === 'signin') {
        // Realizar la lógica de redirección a la página de inicio de sesión
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
@import '../css/styles.css';
</style>
