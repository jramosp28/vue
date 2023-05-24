import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProductView from './views/ProductView.vue';
import NotFoundView from './views/NotFoundView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/product/:productId',
    name: 'ProductView',
    component: ProductView
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView
  },
  {
    path: '/login', 
    name: 'login', 
    component: LoginView,
  },
  {
    path: '/register', 
    name: 'register', 
    component: RegisterView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
