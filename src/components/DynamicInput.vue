<template>
  <div
    class="input-wrapper"
    :class="[
      statusClass,
      {
        'has-left-icon': hasIconLeft,
        'has-right-icon': hasIconRight,
        focused,
        filled,
        hovered,
        disabled,
        readonly,
        'with-static-label': isStaticLabel
      }
    ]"
  >
    <label v-if="label && isStaticLabel" class="label static"
      >{{ label }}<span v-if="required" class="required">*</span></label
    >

    <div class="input-container">
      <!-- preaddon -->
      <span class="preaddon" v-if="preaddon.length > 0">{{ preaddon }}</span>

      <slot name="icon-left" />

      <slot name="prefix" />

      <div class="input-inner">
        <input
          class="input-inners"
          :type="type"
          :placeholder="isStaticLabel ? placeholder : focused || filled ? '' : placeholder"
          :disabled="disabled"
          :readonly="readonly"
          v-model="innerValue"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @mouseenter="hovered = true"
          @mouseleave="hovered = false"
        />

        <label v-if="label && !isStaticLabel" class="label floating" :class="{ active: focused || filled }">
          {{ label }}<span v-if="required" class="required">*</span>
        </label>
      </div>

      <slot name="suffix" />

      <slot name="icon-right" />

      <slot name="append" />
    </div>

    <p v-if="message" class="message" :class="status">{{ message }}</p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  preaddon: {
    type: String,
    default: ""
  },
  placeholder: String,
  required: Boolean,
  hasIconLeft: Boolean,
  hasIconRight: Boolean,
  type: {
    type: String,
    default: "text"
  },
  status: String,
  message: String,
  disabled: Boolean,
  readonly: Boolean,
  isStaticLabel: Boolean
});

const emit = defineEmits(["update:modelValue"]);
const innerValue = ref(props.modelValue);
const focused = ref(false);
const hovered = ref(false);

const filled = computed(() => !!innerValue.value);
const statusClass = computed(() => (props.status ? `status-${props.status}` : ""));

watch(
  () => props.modelValue,
  (val) => (innerValue.value = val)
);

function onFocus() {
  focused.value = true;
}

function onBlur() {
  focused.value = false;
}

function onInput(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 14px;
  position: relative;
  background: white;
  transition: border 0.2s;
}

.input-inner {
  flex: 1;
  position: relative;
}

.input-inners {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0;
  background: transparent;
  color: #333;
}

.label.static {
  font-size: 12px;
  font-weight: 500;
  color: #555;
  margin-bottom: 2px;
}

.label.floating {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  font-size: 14px;
  color: #333333;
  pointer-events: none;
}

.label.floating.active {
  top: -10px;
  font-size: 12px;
  background: white;
  padding: 0 4px;
}

.required {
  color: var(--color-error);
  margin-left: 2px;
}

.status-error .input-container {
  border-color: var(--color-error);
}
.status-success .input-container {
  border-color: var(--color-success);
}

.message {
  font-size: 12px;
  margin-top: 2px;
}

.message.error {
  color: var(--color-error);
}
.message.success {
  color: var(--color-success);
}

input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}

input:read-only {
  background: #f9f9f9;
}
</style>
