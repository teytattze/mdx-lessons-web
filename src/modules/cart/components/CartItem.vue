<template>
  <div class="row align-items-center">
    <div class="col-12 col-sm-5 col-md-4 col-lg-3 p-5">
      <img :src="item.imageUrl" class="img-fluid" />
    </div>
    <div
      class="col-12 col-sm-7 col-md-8 col-lg-9 p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between"
    >
      <div class="mb-3 mb-md-0">
        <div class="mb-2">
          <div v-if="item.isOnlineClass" class="badge bg-info">
            <font-awesome-icon icon="globe" />
            <p class="d-inline ms-1">Online</p>
          </div>
          <div v-else class="badge bg-success">
            <font-awesome-icon icon="school" />
            <p class="d-inline ms-1">Physical</p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <h1 class="fs-5 mb-0 text-truncate">
            {{ item.subject }}
          </h1>
          <button
            @click="cartStore.removeItem(item.id)"
            class="btn btn-light btn-sm ms-2"
          >
            <font-awesome-icon class="text-danger" icon="times" />
          </button>
        </div>
        <div
          class="w-25 mt-3 mb-3 bg-secondary bg-opacity-25 rounded-pill"
          style="height: 2px"
        ></div>
        <p class="mb-0 text-secondary">Location: {{ item.location }}</p>
        <p class="mb-0 text-secondary">Price: {{ item.price }}</p>
      </div>
      <div
        class="input-group input-group-sm"
        style="min-width: 100px; width: 100px"
      >
        <button
          @click="cartStore.decreaseItemCount(item.id)"
          class="btn btn-outline-secondary"
        >
          <font-awesome-icon icon="minus" />
        </button>
        <input
          type="number"
          class="form-control"
          aria-label="Item quantity"
          style="width: 24px"
          v-model="item.quantity"
          disabled
        />
        <button
          @click="cartStore.increaseItemCount(item.id)"
          class="btn btn-outline-secondary"
        >
          <font-awesome-icon icon="plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICartLesson } from '@shared/interfaces/cart.interface';
import { useCartStore } from '@stores/cart.store';

interface IProps {
  item: ICartLesson;
}
defineProps<IProps>();

const cartStore = useCartStore();
</script>
