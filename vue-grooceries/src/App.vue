<template>
  <div>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import './css/styles.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>