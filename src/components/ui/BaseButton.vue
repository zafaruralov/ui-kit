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
    "pl-btn-base",
    `pl-btn-${props.color || "primary"}`,
    `pl-btn-${props.variant || "solid"}`,
    `pl-btn-${props.size || "medium"}`,
    `pl-btn-${props.grouped && "group"}`,
    props.disabled && "pl-btn-disabled",
    props.icon && "pl-btn-with-icon",
    props.badge && "pl-btn-with-badge"
  ];
});

const isHovered = ref(false);
</script>
<template>
  <!-- badgeText && (badgePosition !== 'on-hover' || isHovered) -->
  <button :class="classes" :disabled="disabled" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <slot />
    <TooltipBadge
      v-show="badgeText && (badgePosition !== 'on-hover' || isHovered)"
      :text="badgeText"
      :size="size"
      :color="props.color"
      :position="badgeDirection || 'top'"
      :mode="badgePosition"
      :show="isHovered"
    />
  </button>
</template>

<style></style>
