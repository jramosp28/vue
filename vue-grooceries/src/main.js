import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firebase';

const app = createApp(App);

app.use(router);

app.mount('#app');
