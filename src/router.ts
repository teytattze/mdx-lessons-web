import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import CartPage from '@modules/cart';
import CheckoutPage from '@modules/checkout';
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
	{
		path: '/checkout',
		component: CheckoutPage,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
