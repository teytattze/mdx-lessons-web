import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import CartPage from '@modules/cart';
import LessonsPage from '@modules/lesson';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: LessonsPage,
	},
	{
		path: '/cart',
		component: CartPage,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
