import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';
import App from './App.vue';
import { createApp } from 'vue';

const app = createApp(App);
app.use(Toast);
app.use(router);
app.mount('#app');
