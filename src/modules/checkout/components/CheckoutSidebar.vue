<template>
  <div class="w-100 rounded shadow-lg p-4">
    <h2 class="fs-5">Summary</h2>
    <div
      class="w-100 mt-3 mb-3 bg-secondary bg-opacity-25 rounded-pill"
      style="height: 2px"
    ></div>
    <div class="overflow-auto" style="max-height: 360px">
      <div class="row">
        <div
          :key="item.id"
          v-for="item in cartStore.lessons"
          class="col-12 col-sm-6 col-md-12 row align-items-center py-3"
        >
          <div class="col-3">
            <img :src="item.imageUrl" alt="item.subject" class="img-fluid" />
          </div>
          <div class="col-9">
            <h1 class="fs-6 text-truncate mb-1">
              {{ item.subject }}
            </h1>
            <p class="mb-0 text-secondary">Quantity: {{ item.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@stores/cart.store';

const cartStore = useCartStore();
</script>
