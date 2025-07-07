<template>
  <label :for="id" class="checkbox">
    <input type="checkbox" :id="id" :value="value" :disabled="disabled" v-model="localValue" />
    <span class="custom-checkbox"></span>
    <span class="label-text">{{ label }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useInputProps } from "@/composables/useInputProps";

const props = defineProps({
  id: { type: String, required: true },
  modelValue: [Boolean, Array],
  label: String,
  value: { type: [String, Number, Boolean], default: true },
  disabled: Boolean
});

const emit = defineEmits(["update:modelValue"]);
const { localValue } = useInputProps(props, emit);
</script>

<style lang="scss" scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input:disabled + .custom-checkbox {
    border-color: #aaa;
    background-color: #eee;
  }

  input:disabled ~ .label-text {
    color: #aaa;
    cursor: not-allowed;
  }
}
</style>
