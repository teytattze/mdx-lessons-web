<template>
  <div>
    <header class="mb-4">
      <h1>{{ header }}</h1>
    </header>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header: string;
}

defineProps<IProps>();
</script>
