import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase';


const app = createApp(App);

app.use(router);

// Esperar a que se inicialice la aplicación de Firebase antes de montar la aplicación Vue
auth.onAuthStateChanged(() => {
  app.mount('#app');
});
