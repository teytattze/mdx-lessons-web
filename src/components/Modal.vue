<template>
  <div class="modal-base" tabindex="-1" v-if="isOpen">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  isOpen: boolean;
}
defineProps<IProps>();
</script>

<style scope>
.modal-base {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: block;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(33, 37, 41, 0.7);
}
</style>
