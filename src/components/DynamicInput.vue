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
      <span v-if="preaddon" class="input-addon left">
        {{ preaddon }}
      </span>

      <slot name="icon-left" />

      <slot name="prefix" />

      <div class="input-container">
        <input
          class="input-element"
          :class="{
            'rounded-left-none': preaddon,
            'rounded-right-none': postaddon || $slots.append || $slots['icon-right'] || $slots.suffix
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

        <label v-if="label && !isStaticLabel" class="label floating" :class="{ active: focused || filled }">
          {{ label }}<span v-if="required" class="required">*</span>
        </label>
      </div>

      <slot name="suffix" />

      <slot name="icon-right" />

      <slot name="append" />

      <span v-if="postaddon" class="input-addon right">
        {{ postaddon }}
      </span>
    </div>

    <!-- Message -->
    <p v-if="message" class="message" :class="status">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

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

const innerValue = ref(props.modelValue);
const focused = ref(false);
const hovered = ref(false);

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

.input-addon.right {
  border-left: none;
  border-radius: 0px 8px 8px 0px;
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
  top: 50%;
  left: 4%;
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
  background: #f1f5f9;
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
