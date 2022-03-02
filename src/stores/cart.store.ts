import { ICartLesson } from '@shared/interfaces/cart.interface';
import { ILesson } from '@shared/interfaces/lesson.interface';
import { defineStore } from 'pinia';

interface ICartStoreState {
	lessons: ICartLesson[];
}

export const useCartStore = defineStore('cart', {
	state: (): ICartStoreState => ({
		lessons: [],
	}),
	getters: {
		cartItemsCount: (state) =>
			state.lessons.reduce((prev, curr) => prev + curr.quantity, 0),
		isCartEmpty: (state) => state.lessons.length === 0,
	},
	actions: {
		increaseItemCount(id: string) {
			const index = this.lessons.findIndex((item) => item.id === id);
			if (this.lessons[index].quantity >= this.lessons[index].slot) return;
			this.lessons[index].quantity++;
		},
		decreaseItemCount(id: string) {
			const index = this.lessons.findIndex((item) => item.id === id);
			this.lessons[index].quantity--;
			if (this.lessons[index].quantity === 0) this.lessons.splice(index, 1);
		},
		addItem(lesson: ILesson, quantity: number) {
			const index = this.lessons.findIndex((item) => item.id === lesson.id);
			if (index === -1) this.lessons.push({ ...lesson, quantity });
			else this.increaseItemCount(this.lessons[index].id);
		},
		removeItem(id: string) {
			const index = this.lessons.findIndex((item) => item.id === id);
			if (index === -1) return;
			this.lessons.splice(index, 1);
		},
		clearCart() {
			this.lessons = [];
		},
	},
});
