<template>
  <!-- , { visible: mode !== 'on-hover' || show } -->
  <div class="tooltip-badge" :class="[`tooltip-${position}`, `mode-${mode}`, `tooltip-${color}`]">
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

<style lang="scss">
.tooltip-badge {
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 10;
  opacity: 1;
  transition: opacity 0.2s ease;
  padding: 4px 5px;
  border-radius: 6px;
  background: var(--color-info);
}

.tooltip-primary {
  background: var(--color-primary);
  color: #fff;
}
.tooltip-secondary {
  background: var(--color-secondary);
  color: #fff;
}
.tooltip-info {
  background: var(--color-info);
  color: #fff;
}
.tooltip-success {
  background: var(--color-success);
  color: #fff;
}
.tooltip-warning {
  background: var(--color-warning);
  color: var(--color-secondary);
}
.tooltip-error {
  background: var(--color-error);
  color: #fff;
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
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
}

.mode-on-hover.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
}

.mode-on-hover.tooltip-left {
  right: 100%;
  top: 50%;
  transform: translateX(-8px) translateY(-50%);
}

.mode-on-hover.tooltip-right {
  left: 100%;
  top: 50%;
  transform: translateX(8px) translateY(-50%);
}

// .tooltip-content {
//   position: relative;
//   display: inline-block;
// }

.tooltip-content.hovered::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: inherit;
  transform: translate(-50%, 0);
}
.tooltip-left .tooltip-content.hovered::before {
  transform: rotate(270deg);
  left: 100%;
  top: 100%;
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

// .btn-small {
//   font-size: 12px;
//   padding: 12px 18px;
//   max-height: 38px;
//   border-radius: 8px;
//   gap: 6px;
// }
// .btn-medium {
//   font-size: 14px;
//   padding: 14px 21px;
//   max-height: 45px;
//   border-radius: 10px;
//   gap: 7px;
// }
// .btn-large {
//   font-size: 16px;
//   padding: 16px 24px;
//   max-height: 51px;
//   border-radius: 12px;
//   gap: 8px;
// }
// .btn-large-x {
//   font-size: 18px;
//   padding: 18px 27px;
//   max-height: 58px;
//   border-radius: 14px;
//   gap: 9px;
// }
</style>
