import { reactive, toRefs } from 'vue';

interface IUseFetchState<TData> {
  data: TData | null;
  error: any | null;
  isLoading: boolean;
  controller: AbortController | null;
}

export function useFetch<TData extends any>() {
  const state = reactive<IUseFetchState<TData>>({
    data: null,
    error: null,
    isLoading: true,
    controller: null,
  });

  const handleFetch = async (url: string, options?: RequestInit) => {
    if (state.controller) state.controller.abort();
    state.controller = new AbortController();
    try {
      const res = await fetch(`${url}`, {
        signal: state.controller.signal,
        ...options,
      });
      const result = await res.json();
      state.data = result;
    } catch (err) {
      state.error = err;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), handleFetch };
}
