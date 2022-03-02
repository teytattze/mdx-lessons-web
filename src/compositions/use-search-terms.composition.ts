import { reactive, toRefs } from 'vue';

interface IUseSearchTermsState {
	searchTerms: string;
}

export function useSearchTerms() {
	const state = reactive<IUseSearchTermsState>({
		searchTerms: '',
	});

	const handleSearchTerms = (value: string) => {
		state.searchTerms = value;
	};

	return { ...toRefs(state), handleSearchTerms };
}
