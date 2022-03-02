<template>
  <PageLayout header="Cart">
    <div v-if="!isCartEmpty">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in cartStore.lessons">
          <CartItem :item="item" />
        </li>
      </ul>
      <footer class="mt-5 text-center">
        <router-link to="/checkout" class="btn btn-outline-primary">
          <div>
            <span class="me-2">Checkout</span>
            <font-awesome-icon icon="angle-right" />
          </div>
        </router-link>
      </footer>
    </div>
    <div v-else>
      <h1 class="fs-5 text-secondary mb-4">
        Your cart is currently empty. Please consider add some items before
        checkout
      </h1>
      <router-link to="/" class="btn btn-outline-primary">
        <div>
          <font-awesome-icon icon="angle-left" />
          <span class="ms-2">Continue Shopping</span>
        </div>
      </router-link>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@layouts/PageLayout.vue';
import { useCartStore } from '@stores/cart.store';
import { computed } from 'vue';
import CartItem from './CartItem.vue';

const cartStore = useCartStore();
const isCartEmpty = computed(() => cartStore.isCartEmpty);
</script>
