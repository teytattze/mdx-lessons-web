import { reactive, toRefs } from 'vue';

export interface IUseModalState {
  isOpen: boolean;
}

export function useModal() {
  const state = reactive<IUseModalState>({
    isOpen: false,
  });

  const handleOpen = () => {
    state.isOpen = true;
  };

  const handleClose = () => {
    state.isOpen = false;
  };

  const handleToggle = () => {
    state.isOpen = !state.isOpen;
  };

  return { ...toRefs(state), handleClose, handleOpen, handleToggle };
}
