<template>
  <div class="card w-100 h-100">
    <div class="p-5 border-bottom">
      <img :src="lesson.imageUrl" class="card-img-top" :alt="lesson.subject" />
    </div>
    <div class="card-body py-4">
      <div class="mb-3">
        <div v-if="lesson.isOnlineClass" class="badge bg-info">
          <font-awesome-icon icon="globe" />
          <p class="d-inline ms-1">Online</p>
        </div>
        <div v-else class="badge bg-success">
          <font-awesome-icon icon="school" />
          <p class="d-inline ms-1">Physical</p>
        </div>
      </div>
      <h1 class="fs-5 text-truncate">{{ lesson.subject }}</h1>
      <div
        class="w-25 mt-3 mb-3 bg-secondary bg-opacity-25 rounded-pill"
        style="height: 2px"
      ></div>
      <div class="h-auto mb-4">
        <p class="my-0">Location: {{ lesson.location }}</p>
        <p class="my-0">Price: {{ lesson.price }}</p>
        <p class="my-0">Slot: {{ lesson.slot }}</p>
      </div>
      <button class="btn btn-primary" v-if="hasSlot" @click="addItem(lesson)">
        Add to Cart
      </button>
      <button class="btn btn-primary" disabled v-else>Sold Out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ILesson } from '@shared/interfaces/lesson.interface';
import { useCartStore } from '@stores/cart.store';
import { computed } from 'vue';

interface IProps {
  lesson: ILesson;
}

const cartStore = useCartStore();
const props = defineProps<IProps>();

const addItem = (lesson: ILesson) => {
  cartStore.addItem(lesson, 1);
  props.lesson.slot -= 1;
};

const hasSlot = computed(() => props.lesson.slot > 0);
</script>
