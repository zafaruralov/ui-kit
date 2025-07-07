<template>
  <div
    class="input-wrapper"
    :class="[
      statusClass,
      {
        focused,
        filled,
        hovered,
        disabled,
        readonly,
        'with-static-label': isStaticLabel
      }
    ]"
  >
    <label v-if="label && isStaticLabel" class="label static">
      {{ label }}<span v-if="required" class="required">*</span>
    </label>

    <div class="input-group">
      <!-- Preaddon -->
      <span
        v-if="preaddon"
        class="input-addon left"
      >
        {{ preaddon }}
      </span>

      <!-- Left Icon -->
      <slot name="icon-left" />

      <!-- Prefix -->
      <slot name="prefix" />

      <!-- Input container -->
      <div class="input-container">
        <input
          class="input-element"
          :class="{
            'rounded-left-none': preaddon,
            'rounded-right-none': $slots.append || $slots['icon-right'] || $slots.suffix
          }"
          :type="type"
          :placeholder="!isStaticLabel && !(focused || filled) ? placeholder : ''"
          :disabled="disabled"
          :readonly="readonly"
          v-model="innerValue"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @mouseenter="hovered = true"
          @mouseleave="hovered = false"
        />

        <label
          v-if="label && !isStaticLabel"
          class="label floating"
          :class="{ active: focused || filled }"
        >
          {{ label }}<span v-if="required" class="required">*</span>
        </label>
      </div>

      <!-- Suffix -->
      <slot name="suffix" />

      <!-- Right Icon -->
      <slot name="icon-right" />

      <!-- Append -->
      <slot name="append" />
    </div>

    <!-- Message -->
    <p v-if="message" class="message" :class="status">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  preaddon: {
    type: String,
    default: ''
  },
  required: Boolean,
  hasIconLeft: Boolean,
  hasIconRight: Boolean,
  type: {
    type: String,
    default: 'text'
  },
  status: String,
  message: String,
  disabled: Boolean,
  readonly: Boolean,
  isStaticLabel: Boolean
});

const emit = defineEmits(['update:modelValue']);

const innerValue = ref(props.modelValue);
const focused = ref(false);
const hovered = ref(false);

const filled = computed(() => !!innerValue.value);
const statusClass = computed(() => (props.status ? `status-${props.status}` : ''));

watch(() => props.modelValue, (val) => {
  innerValue.value = val;
});

function onFocus() {
  focused.value = true;
}

function onBlur() {
  focused.value = false;
}

function onInput(e) {
  emit('update:modelValue', e.target.value);
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-group {
  display: flex;
  width: 100%;
  font-size: 14px;
}

.input-addon {
  background: #f1f5f9;
  color: #64748b;
  padding: 0 12px;
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  height: 40px;
  white-space: nowrap;
}

.input-addon.left {
  border-right: none;
  border-radius: 8px 0 0 8px;
}

.input-element {
  flex: 1;
  border: 1px solid #cbd5e1;
  height: 40px;
  padding: 0 12px;
  outline: none;
  color: #0f172a;
  font-size: 14px;
  border-radius: 8px;
  background: white;
}

.rounded-left-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.rounded-right-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-container {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.label.static {
  font-size: 12px;
  font-weight: 500;
  color: #555;
}

.label.floating {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 14px;
  pointer-events: none;
  transition: 0.2s ease;
  background: white;
  padding: 0 4px;
}

.label.floating.active {
  top: -8px;
  font-size: 12px;
}

.required {
  color: var(--color-error, red);
  margin-left: 4px;
}

.message {
  font-size: 12px;
  margin-top: 2px;
}

.message.error {
  color: var(--color-error, red);
}

.message.success {
  color: var(--color-success, green);
}
</style>
