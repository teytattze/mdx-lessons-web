<template>
  <PageLayout header="Checkout">
    <div class="row g-4" v-if="!isCartEmpty">
      <div class="col-md-6 col-lg-8">
        <CheckoutForm />
      </div>
      <div class="col-md-6 col-lg-4">
        <CheckoutSidebar />
      </div>
    </div>
    <div v-else>
      <h1 class="fs-5 text-secondary mb-4">
        You cannot checkout because your cart is empty!
      </h1>
      <router-link to="/" class="btn btn-outline-primary">
        <div>
          <font-awesome-icon icon="angle-left" />
          <span class="ms-2">Back to Shopping</span>
        </div>
      </router-link>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@layouts/PageLayout.vue';
import { useCartStore } from '@stores/cart.store';
import { computed } from 'vue';
import CheckoutForm from './CheckoutForm.vue';
import CheckoutSidebar from './CheckoutSidebar.vue';

const cartStore = useCartStore();
const isCartEmpty = computed(() => cartStore.isCartEmpty);
</script>
