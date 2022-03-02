<template>
	<h1 class="fs-4">Personal Information</h1>
	<form class="py-4">
		<div class="mb-4 row gx-4 gy-3">
			<div class="col-12 col-lg-6">
				<label class="form-label mb-1" for="firstName">First Name</label>
				<input
					class="form-control"
					id="firstName"
					placeholder="Enter your first name..."
					required
					type="text"
					v-model="values.firstName"
				/>
				<p class="field-error-text" v-show="formError.firstName">
					{{ formError.firstName }}
				</p>
			</div>
			<div class="col-12 col-lg-6">
				<label class="form-label mb-1" for="lastName">Last Name</label>
				<input
					class="form-control"
					id="lastName"
					placeholder="Enter your last name..."
					type="text"
					v-model="values.lastName"
				/>
				<p class="field-error-text" v-show="formError.lastName">
					{{ formError.lastName }}
				</p>
			</div>
			<div class="col-12 col-lg-6">
				<label class="form-label mb-1" for="email">Email address</label>
				<input
					class="form-control"
					id="email"
					placeholder="Enter your email address..."
					type="email"
					v-model="values.email"
				/>
				<p class="field-error-text" v-show="formError.email">
					{{ formError.email }}
				</p>
			</div>
			<div class="col-12 col-lg-6">
				<label class="form-label mb-1" for="phoneNo">Phone Number</label>
				<input
					class="form-control"
					id="phoneNo"
					placeholder="Enter your phone number..."
					type="text"
					v-model="values.phoneNo"
				/>
				<p class="field-error-text" v-show="formError.phoneNo">
					{{ formError.phoneNo }}
				</p>
			</div>
		</div>
		<button
			class="btn btn-outline-primary"
			@click.prevent="handleCheckoutSubmit"
			type="submit"
		>
			Submit
		</button>
	</form>
	<Modal :isOpen="isOpen">
		<div class="d-flex flex-column align-items-center">
			<img
				alt="Check Icon"
				class="mb-3 mb-md-4"
				height="64"
				src="../../../assets/check-icon.svg"
				width="64"
			/>
			<h1 class="fs-3 text-success text-center">Checkout Successfully</h1>
			<p class="fs-6 text-secondary text-center">
				Thank you {{ values.firstName }} {{ values.lastName }}!
			</p>
			<p class="fs-6 text-secondary text-center mb-0">
				Email: {{ values.email }}
			</p>
			<p class="fs-6 text-secondary text-center mb-0">
				Phone Number: {{ values.phoneNo }}
			</p>
		</div>
		<div
			class="w-100 my-4 bg-secondary bg-opacity-25 rounded-pill"
			style="height: 2px"
		></div>
		<div class="text-center">
			<h2 class="fs-5 text-secondary mb-3">Your Orders</h2>
			<p :key="item.id" class="mb-0" v-for="item in cartStore.lessons">
				{{ item.subject }} - {{ item.quantity }}
			</p>
		</div>
		<div class="text-center mt-5">
			<button @click="handleCheckoutModalClose" class="btn btn-outline-success">
				Continue
			</button>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import { useCartStore } from '@stores/cart.store';
import Modal from '@components/Modal.vue';
import { useCheckout } from '../checkout.composition';

const cartStore = useCartStore();
const {
	values,
	formError,
	isOpen,
	handleCheckoutSubmit,
	handleCheckoutModalClose,
} = useCheckout();
</script>

<style scoped>
.field-error-text {
	color: #dc3545;
	font-weight: 600;
	font-size: 0.8rem;
	margin-top: 0.25rem;
}
</style>
