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
      <slot name="preappend" />
      <span v-if="preaddon" class="input-addon left" :class="{ 'with-append': hasPreappend }">
        {{ preaddon }}
      </span>
      <slot name="icon-left" />

      <slot name="prefix" />

      <div class="input-container">
        <input
          class="input-element"
          :class="[
            status,
            {
              'rounded-left-none': preaddon,
              'rounded-right-none': postaddon || $slots.append || $slots['icon-right'] || $slots.suffix
            }
          ]"
          :type="type"
          :placeholder="isStaticLabel ? placeholder : ''"
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

      <span v-if="postaddon" class="input-addon right" :class="{ 'with-append': hasAppend }">
        {{ postaddon }}
      </span>
      <slot name="append" />
    </div>

    <p v-if="message" class="message" :class="status">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, useSlots } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  preaddon: {
    type: String,
    default: ""
  },
  postaddon: {
    type: String,
    default: ""
  },
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
const slots = useSlots();

const innerValue = ref(props.modelValue);
const focused = ref(false);
const hovered = ref(false);

const hasAppend = computed(() => !!slots.append);
const hasPreappend = computed(() => !!slots.preappend);

const filled = computed(() => !!innerValue.value);
const statusClass = computed(() => (props.status ? `status-${props.status}` : ""));

watch(
  () => props.modelValue,
  (val) => {
    innerValue.value = val;
  }
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

<style>
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

.input-button {
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 45px;
  border: 1px solid var(--color-primary);
  cursor: pointer;
  user-select: none;
}

.input-button.left {
  border-right: none;
  border-radius: 8px 0 0 8px;
}

.input-button.right {
  border-left: none;
  border-radius: 0 8px 8px 0;
}

.input-addon {
  background: #fdfdfd;
  color: #9ca3af;
  padding: 0 12px;
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  height: 45px;
  white-space: nowrap;
}

.input-addon.left {
  border-right: none;
  border-radius: 8px 0 0 8px;
}
.input-addon.left.with-append {
  border-radius: 0;
}
.input-addon.right {
  border-left: none;
  border-radius: 0px 8px 8px 0px;
}

.input-addon.right.with-append {
  border-radius: 0;
}
.input-element {
  flex: 1;
  border: 1px solid #cbd5e1;
  height: 45px;
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
  margin-left: 12px;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  font-size: 14px;
  color: #333333;
  pointer-events: none;
  transition: 0.2s ease;
}

.label.floating.active {
  top: -2%;
  font-size: 12px;
  padding: 0 4px;
  background: #fff;
}

.required {
  color: var(--color-error, red);
  margin-left: 4px;
}

.message {
  font-size: 12px;
  margin-top: 2px;
}

.status-error .input-element,
.status-error .input-addon,
.status-error .label.floating,
.status-error .label.static {
  border-color: var(--color-error, red);
  color: var(--color-error, red);
}

.status-success .input-element,
.status-success .input-addon,
.status-success .label.floating,
.status-success .label.static {
  border-color: var(--color-success, green);
  color: var(--color-success, green);
}

.message.error {
  color: var(--color-error, red);
}

.message.success {
  color: var(--color-success);
}
</style>
