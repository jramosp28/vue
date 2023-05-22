import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import './css/styles.css'

// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: HomeView
      }
    ]
  })
  
  const app = createApp(App)
  
  app.use(router)
  
  app.mount('#app')
