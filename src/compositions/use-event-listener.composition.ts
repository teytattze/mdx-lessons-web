import { onMounted, onUnmounted } from 'vue';

export function useEventListener(
  target: Window,
  event: any,
  callback: (this: Window, ev: any) => any,
) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
