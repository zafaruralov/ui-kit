<template>
  <div class="tooltip-badge" :class="[`tooltip-${position}`, `mode-${mode}`, { visible: mode !== 'on-hover' || show }]">
    <span class="tooltip-content" :class="mode === 'on-hover' && 'hovered'">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  position: {
    type: String,
    default: "top"
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

<style>
.tooltip-badge {
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s ease;
  padding: 4px 5px;
  border-radius: 6px;
  background: var(--color-info);
}

.visible {
  opacity: 1;
}

.mode-in-block {
  position: static;
  opacity: 1;
  margin-left: 8px;
}
.mode-on-top.tooltip-top {
  top: -6px;
  right: -6px;
}

.mode-on-top.tooltip-left {
  top: -6px;
  left: -6px;
}
.mode-on-top.tooltip-right {
  top: -6px;
  right: -6px;
}

.mode-on-hover.tooltip-top {
  top: -28px;
}
.mode-on-hover.tooltip-left {
  left: -76px;
}
.mode-on-hover.tooltip-right {
  right: -72px;
}
.mode-on-hover.tooltip-bottom {
  bottom: -28px;
}
.tooltip-content.hovered::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: var(--color-info);
  transform: translate(-50%, 0);
}
.tooltip-left .tooltip-content.hovered::before {
  transform: rotate(270deg);
  left: 100%;
  top: 8px;
}
.tooltip-right .tooltip-content.hovered::before {
  transform: rotate(90deg);
  left: -8px;
  top: 8px;
}
.tooltip-bottom .tooltip-content.hovered::before {
  transform: rotate(180deg);
  left: 45%;
  top: -28%;
}
</style>
