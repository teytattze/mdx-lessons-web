import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import LessonsPage from '@modules/lesson';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: LessonsPage,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
