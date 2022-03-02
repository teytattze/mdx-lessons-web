import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';

createApp(App).use(createPinia()).mount('#app');
