<template>
	<PageLayout header="Courses">
		<LessonFilterBar
			@update:selected-sort-option="handleSelectOption"
			@update:search-terms="handleSearchTerms"
			:search-terms="searchTerms"
			:selected-sort-option="selectedSortOption"
			:sort-options="sortOptions"
		/>
		<div class="row g-4">
			<div
				:key="lesson.subject"
				v-for="lesson in lessons"
				class="col-12 col-sm-6 col-md-4 col-lg-3"
			>
				<LessonCard :lesson="lesson" />
			</div>
		</div>
	</PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@layouts/PageLayout.vue';
import LessonCard from './LessonCard.vue';
import LessonFilterBar from './LessonFilterBar.vue';
import { useIndexLessons, useLessonFilters } from '../lesson.composition';
import { sortLessons } from '../lesson.helper';
import { computed } from 'vue';

const { selectedSortOption, sortOptions, handleSelectOption } =
	useLessonFilters();
const { data, searchTerms, handleSearchTerms } = useIndexLessons();

const lessons = computed(() => {
	const option = sortOptions.value[selectedSortOption.value] || '';
	return sortLessons(data.value, option.field, { order: option.order });
});
</script>
