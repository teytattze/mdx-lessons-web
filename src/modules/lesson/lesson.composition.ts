import { useFetch } from '@compositions/use-fetch.composition';
import { useSearchTerms } from '@compositions/use-search-terms.composition';
import { LESSONS_BASE_URL, sortOptions } from '@shared/constants/lesson.const';
import { ILesson } from '@shared/interfaces/lesson.interface';
import { useCartStore } from '@stores/cart.store';
import { onMounted, reactive, toRefs, watch } from 'vue';

interface IUseIndexLessonsState {
	data: ILesson[];
}

export function useIndexLessons() {
	const state = reactive<IUseIndexLessonsState>({
		data: [],
	});

	const cartStore = useCartStore();
	const {
		data: lessons,
		error,
		isLoading,
		handleFetch,
	} = useFetch<ILesson[]>();
	const { handleSearchTerms, searchTerms } = useSearchTerms();

	onMounted(async () => {
		await handleFetch(LESSONS_BASE_URL);
		if (!lessons.value) return;
		updateLessonsSlot(lessons.value);
	});

	watch(
		() => searchTerms.value,
		async () => {
			if (searchTerms.value === '') {
				await handleFetch(LESSONS_BASE_URL);
			} else {
				await handleFetch(
					`${LESSONS_BASE_URL}/search?keyword=${searchTerms.value}`,
				);
			}
			if (!lessons.value) return;
			updateLessonsSlot(lessons.value);
		},
	);

	const updateLessonsSlot = (data: ILesson[]) => {
		cartStore.lessons.forEach((cartLesson) => {
			const index = data.findIndex((lesson) => lesson.id === cartLesson.id);
			data[index].slot -= cartLesson.quantity;
		});
		state.data = data;
	};

	return {
		handleSearchTerms,
		error,
		isLoading,
		searchTerms,
		...toRefs(state),
	};
}

export function useLessonFilters() {
	const state = reactive({
		sortOptions: sortOptions,
		selectedSortOption: '',
	});

	const handleSelectOption = (value: string) => {
		state.selectedSortOption = value;
	};

	return { ...toRefs(state), handleSelectOption };
}
