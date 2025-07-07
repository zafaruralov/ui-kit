import { computed, toRefs } from "vue";

export function useInputProps(props: any, emit: any) {
  const { modelValue } = toRefs(props);

  const localValue = computed({
    get() {
      return modelValue.value;
    },
    set(value) {
      emit("update:modelValue", value);
    }
  });

  return { localValue };
}
