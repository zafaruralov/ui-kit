<template>
  <label :for="id" class="radio">
    <input type="radio" :id="id" :name="name" :value="value" :disabled="disabled" v-model="localValue" />
    <span class="custom-radio"></span>
    <span class="label-text">{{ label }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useInputProps } from "@/composables/useInputProps";

const props = defineProps({
  id: { type: String, required: true },
  modelValue: [String, Number],
  label: String,
  name: String,
  value: [String, Number],
  disabled: Boolean
});

const emit = defineEmits(["update:modelValue"]);
const { localValue } = useInputProps(props, emit);
</script>

<style lang="scss">
.radio {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input:disabled + .custom-radio {
    border-color: #aaa;
    background-color: #eee;
  }

  input:disabled ~ .label-text {
    color: #aaa;
    cursor: not-allowed;
  }
}
</style>
