<template>
  <label class="toggle-switch" :style="`--switch-color: var(--color-${color})`">
    <div class="switch-wrapper">
      <input :id="id" v-model="localValue" type="checkbox" :name="name" :disabled="disabled" />
      <span class="slider" :disabled="disabled" />
    </div>
    <span class="toggler-text">{{ label }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useInputProps } from "@/composables/useInputProps";

const props = defineProps({
  color: {
    type: String,
    default: "primary"
  },
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  label: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["update:modelValue"]);
const { localValue } = useInputProps(props, emit);
</script>

<style lang="scss" scoped>
.toggle-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .switch-wrapper {
    position: relative;
    width: 36px;
    height: 20px;
    flex-shrink: 0;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    transition: 0.4s;
    border: 1px solid #d2d5da;

    &::before {
      content: "";
      position: absolute;
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 2px;
      background-color: #d2d5da;
      border-radius: 50%;
      transition: 0.4s;
    }

    &:hover {
      border-color: var(--switch-color);
      &::before {
        background-color: var(--switch-color);
      }
    }
  }

  input:checked + .slider {
    background-color: var(--switch-color);
    border-color: var(--switch-color);
  }

  input:checked + .slider::before {
    background: #fff;
    transform: translateX(16px);
  }

  input:disabled + .slider {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
  }

  input:checked ~ .toggler-text {
    color: var(--switch-color);
  }
  .toggler-text {
    color: inherit;
    user-select: none;
  }
}
</style>
