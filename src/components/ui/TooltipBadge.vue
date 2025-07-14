<template>
  <div class="pl-tooltip-badge" :class="[`pl-tooltip-${position}`, `pl-mode-${mode}`, `pl-tooltip-${color}`]">
    <span class="pl-tooltip-content" :class="mode === 'on-hover' && 'hovered'">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  position: {
    type: String,
    default: "top"
  },
  size: String,
  color: {
    type: String,
    default: "primary"
  },
  mode: {
    type: String,
    default: "on-top" // 'in-block', 'on-top', 'on-hover'
  },
  show: {
    type: Boolean,
    default: true
  }
});
</script>
