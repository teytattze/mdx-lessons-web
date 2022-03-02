<template>
  <Navbar />
  <main class="container-xl p-4">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue';
</script>
