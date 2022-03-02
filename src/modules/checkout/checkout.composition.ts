import { useFetch } from '@compositions/use-fetch.composition';
import { useModal } from '@compositions/use-modal.composition';
import { LESSONS_BASE_URL } from '@shared/constants/lesson.const';
import { ORDERS_BASE_URL } from '@shared/constants/order.const';
import { ICheckoutFormPayload } from '@shared/interfaces/checkout.interface';
import { IOrder } from '@shared/interfaces/order.interface';
import { useCartStore } from '@stores/cart.store';
import * as Joi from 'joi';
import { reactive, toRefs, watchEffect } from 'vue';
import {
  checkoutFormValidationSchema,
  checkoutFormValues,
} from './checkout.helper';
import { useRouter } from 'vue-router';

export function useCheckout() {
  const cartStore = useCartStore();
  const { error, isLoading, formError, values, handleReset, handleSubmit } =
    useCheckoutForm();
  const { handleClose, handleOpen, isOpen } = useModal();
  const { push } = useRouter();

  const handleCheckoutSubmit = async () => {
    await handleSubmit();
    if (Object.keys(formError.value).length > 0) return;
    handleOpen();
  };

  const handleCheckoutModalClose = async () => {
    handleReset();
    cartStore.clearCart();
    handleClose();
    push('/');
  };

  return {
    values,
    formError,
    error,
    isLoading,
    isOpen,
    handleCheckoutSubmit,
    handleCheckoutModalClose,
  };
}

interface IUseCheckoutFormState {
  formError: Partial<ICheckoutFormPayload>;
  isInitial: boolean;
  values: ICheckoutFormPayload;
  validationSchema: Joi.Schema;
}

export function useCheckoutForm() {
  const state = reactive<IUseCheckoutFormState>({
    formError: {},
    isInitial: true,
    values: checkoutFormValues,
    validationSchema: checkoutFormValidationSchema,
  });
  const cartStore = useCartStore();
  const { error, isLoading, handleFetch } = useFetch();

  watchEffect(() => {
    if (state.isInitial) return;
    handleValidate();
  });

  const handleSubmit = async () => {
    state.isInitial = false;
    handleValidate();
    if (Object.keys(state.formError).length > 0) return;

    const updatedLessons = cartStore.lessons.map((lesson) => ({
      id: lesson.id,
      slot: lesson.slot - lesson.quantity,
    }));
    const order: IOrder = {
      firstName: state.values.firstName,
      lastName: state.values.lastName,
      email: state.values.email,
      phoneNo: state.values.phoneNo,
      lessons: cartStore.lessons.map((lesson) => ({
        id: lesson.id,
        quantity: lesson.quantity,
      })),
    };

    await handleFetch(`${LESSONS_BASE_URL}/bulk/update`, {
      method: 'PUT',
      body: JSON.stringify({ data: updatedLessons }),
      headers: { 'Content-Type': 'application/json' },
    });
    await handleFetch(`${ORDERS_BASE_URL}/create`, {
      method: 'POST',
      body: JSON.stringify({ data: order }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const handleValidate = () => {
    const joiError = state.validationSchema.validate(state.values, {
      abortEarly: false,
    });
    const errors: any = {};
    joiError.error?.details.forEach((item) => {
      const key = item.context?.key as string;
      const value = item.message;
      errors[key] = value;
    });
    state.formError = errors;
  };

  const handleReset = () => {
    state.formError = {};
    state.isInitial = true;
    state.values = checkoutFormValues;
  };

  return { ...toRefs(state), error, isLoading, handleSubmit, handleReset };
}
