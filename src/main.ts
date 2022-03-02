import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAngleLeft,
	faAngleRight,
	faCartShopping,
	faMagnifyingGlass,
	faMinus,
	faPlus,
	faSchool,
	faTimes,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import { router } from './router';

library.add(
	faAngleLeft,
	faAngleRight,
	faCartShopping,
	faMagnifyingGlass,
	faMinus,
	faPlus,
	faTimes,
	faGlobe,
	faSchool,
);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(createPinia())
	.use(router)
	.mount('#app');
