<template>
	<nav
		class="navbar navbar-light bg-light py-3 sticky-top shadow-transition"
		:class="state.navbarShadow"
	>
		<div
			class="container-xl px-4 h-100 w-100 d-flex justify-content-between align-items-center"
		>
			<div class="mb-2 mb-sm-0">
				<span class="navbar-brand mb-0 h1">MDXLessons</span>
			</div>
			<div class="d-flex align-items-center">
				<router-link to="/" class="btn btn-outline-primary me-2">
					Home
				</router-link>
				<router-link
					to="/cart"
					type="button"
					class="btn btn-primary position-relative"
				>
					<div>
						<font-awesome-icon icon="cart-shopping" />
						<span
							v-show="!isCartEmpty"
							class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
						>
							{{ cartItemsCount }}
							<span class="visually-hidden">Cart items count</span>
						</span>
					</div>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useEventListener } from '@compositions/use-event-listener.composition';
import { useCartStore } from '@stores/cart.store';
import { computed, reactive } from 'vue';

interface IUseNavbarState {
	navbarShadow: string;
}

const state = reactive<IUseNavbarState>({ navbarShadow: '' });
const cartStore = useCartStore();
useEventListener(window, 'scroll', handleScroll);

function handleScroll() {
	state.navbarShadow = window.pageYOffset > 50 ? 'shadow-lg' : '';
}

const cartItemsCount = computed(() => cartStore.cartItemsCount);
const isCartEmpty = computed(() => cartStore.isCartEmpty);
</script>

<style scoped>
.shadow-transition {
	-webkit-transition: box-shadow ease-in-out 0.4s;
	transition: box-shadow ease-in-out 0.4s;
}
</style>
