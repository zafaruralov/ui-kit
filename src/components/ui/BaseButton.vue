<script setup>
import { computed, ref } from "vue";
import TooltipBadge from "./TooltipBadge.vue";

const props = defineProps({
  color: {
    type: String,
    default: "primary"
  },
  variant: String,
  size: String,
  disabled: Boolean,
  icon: Boolean,
  badge: Boolean,
  badgeText: String,
  badgePosition: {
    type: String,
    default: "in-block" // options: 'in-block', 'on-top', 'on-hover'
  },
  badgeDirection: {
    type: String,
    default: "top"
  },
  grouped: Boolean
});

const size = computed(() => props.size || "medium");
const disabled = computed(() => props.disabled || false);

const classes = computed(() => {
  return [
    "btn-base",
    `btn-${props.color || "primary"}`,
    `btn-${props.variant || "solid"}`,
    `btn-${props.size || "medium"}`,
    `btn-${props.grouped && "group"}`,
    props.disabled && "btn-disabled",
    props.icon && "btn-with-icon",
    props.badge && "btn-with-badge"
  ];
});

const isHovered = ref(false);
</script>
<template>
  <!-- badgeText && (badgePosition !== 'on-hover' || isHovered) -->
  <button :class="classes" :disabled="disabled" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <slot />
    <TooltipBadge
      v-show="true"
      :text="badgeText"
      :size="size"
      :color="props.color"
      :position="badgeDirection || 'top'"
      :mode="badgePosition"
      :show="isHovered"
    />
  </button>
</template>

<style>
.btn-base {
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  position: relative;
  will-change: transform, opacity;
}
.btn-primary {
  background: var(--color-primary);
  color: #fff;
}
.btn-secondary {
  background: var(--color-secondary);
  color: #fff;
}
.btn-info {
  background: var(--color-info);
  color: #fff;
}
.btn-success {
  background: var(--color-success);
  color: #fff;
}
.btn-warning {
  background: var(--color-warning);
  color: var(--color-secondary);
}
.btn-error {
  background: var(--color-error);
  color: #fff;
}

.btn-outline.btn-primary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}
.btn-outline.btn-secondary {
  background: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
}
.btn-outline.btn-info {
  background: transparent;
  color: var(--color-info);
  border: 1px solid var(--color-info);
}
.btn-outline.btn-success {
  background: transparent;
  color: var(--color-success);
  border: 1px solid var(--color-success);
}
.btn-outline.btn-warning {
  background: transparent;
  color: var(--color-warning);
  border: 1px solid var(--color-warning);
}
.btn-outline.btn-error {
  background: transparent;
  color: var(--color-error);
  border: 1px solid var(--color-error);
}

.btn-small-x {
  font-size: 10px;
  padding: 10px 15px;
  max-height: 32px;
  border-radius: 6px;
  gap: 5px;
}
.btn-small {
  font-size: 12px;
  padding: 12px 18px;
  max-height: 38px;
  border-radius: 8px;
  gap: 6px;
}
.btn-medium {
  font-size: 14px;
  padding: 14px 21px;
  max-height: 45px;
  border-radius: 10px;
  gap: 7px;
}
.btn-large {
  font-size: 16px;
  padding: 16px 24px;
  max-height: 51px;
  border-radius: 12px;
  gap: 8px;
}
.btn-large-x {
  font-size: 18px;
  padding: 18px 27px;
  max-height: 58px;
  border-radius: 14px;
  gap: 9px;
}
/* TODO i dont know what to do with Solid */
.btn-solid {
}
.btn-outline {
  background: transparent;
}
.btn-tag {
  border-radius: 100px;
  font-size: 14px;
  padding: 15px 10px;
  height: 30px;
}
.btn-text {
  background: none;
  border: none;
  text-decoration: underline;
  color: var(--color-primary);
}
.btn-icon {
  padding: 0;
  width: 45px;
  height: 45px;
  justify-content: center;
}

.btn-base:hover:not(:disabled).btn-solid,
.btn-base:hover:not(:disabled).btn-with-icon,
.btn-base:hover:not(:disabled).btn-outline {
  transform: scale(1.05);
}

.btn-base:hover:not(:disabled).btn-tag {
  background: #0e55a3;
}

.btn-base:hover:not(:disabled).btn-text {
  filter: brightness(150%);
}

.btn-disabled.btn-text {
  filter: grayscale(1);
}

.btn-base:focus {
  outline: none;
}

.btn-base:focus.btn-solid,
.btn-base:focus.btn-with-icon,
.btn-base:focus.btn-outline {
  box-shadow: 0px 0px 0px 1px #f3f4f6;
}

.btn-tag:focus {
  box-shadow: 0px 0px 0px 2px #60b1ff;
}

.btn-text:focus {
  box-shadow: 0px 0px 4px 1px #60b1ff99;
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn-with-icon > *:first-child {
  gap: 7px;
  /* margin-right: 7px; */
}

.btn-badge {
  background: var(--color-info);
  color: #fff;
  font-weight: 700;
  font-size: 10px;
  padding: 4px 5px;
  border-radius: 6px;
  position: absolute;
  white-space: nowrap;
}

.badge-in-block {
  position: static;
  /* margin-left: 8px; */
}

.badge-on-top {
  top: -6px;
  right: -6px;
}

.badge-on-hover {
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-base:hover .badge-on-hover {
  opacity: 1;
}

.button-group {
  display: inline-flex;
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  overflow: hidden;
}

.button-group .btn-base {
  border-radius: 0;
  border-right: 1px solid var(--color-primary);
  color: var(--color-primary);
  background: white;
  font-weight: 500;
}

.button-group .btn-base:last-child {
  border-right: none;
}

.button-group .btn-base:first-child {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.button-group .btn-base:last-child {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
