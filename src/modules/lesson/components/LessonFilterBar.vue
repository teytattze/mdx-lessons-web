<template>
  <nav class="mb-4">
    <div class="row g-4 justify-content-between">
      <div class="col-12 col-sm-5 col-md-4">
        <div class="w-100 input-group">
          <span class="input-group-text" id="addon-wrapping">Sorted By</span>
          <select
            @change="$emit('update:selectedSortOption', ($event.target as HTMLInputElement).value)"
            :value="selectedSortOption"
            aria-label="Select a sort filter"
            class="form-select"
            id="filter"
          >
            <option value="">Select a sort filter...</option>
            <option
              v-for="option in sortOptions"
              :key="option.title"
              :value="option.value"
            >
              {{ option.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-sm-7 col-md-6">
        <div class="w-100 input-group">
          <input
            @input="$emit('update:searchTerms', ($event.target as HTMLInputElement).value)"
            :value="searchTerms"
            aria-label="Search"
            class="form-control"
            placeholder="Search..."
            type="search"
          />
          <button class="btn btn-outline-primary" type="button">
            <font-awesome-icon icon="magnifying-glass" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ISortLessonsOption } from '@shared/interfaces/lesson.interface';

interface IProps {
  searchTerms: string;
  selectedSortOption: string;
  sortOptions: Record<string, ISortLessonsOption>;
}

defineProps<IProps>();
defineEmits(['update:selectedSortOption', 'update:searchTerms']);
</script>
