<template>
  <div>
    <AppHeader />
    <HomeView />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import HomeView from "./views/HomeView.vue";
import AppFooter from "./components/AppFooter.vue";
import './css/styles.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    HomeView,
    AppFooter
  }
}
</script>