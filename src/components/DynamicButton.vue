<template>
    <component 
      :is="tag"
      :class="buttonClasses"
      :disabled="disabled"
      @click="handleClick"
      :style="customStyles"
    >
      <Icon v-if="icon && !iconOnly" :name="icon" :class="iconClasses" />
      <span v-if="!iconOnly" class="button-text">
        <slot></slot>
      </span>
      <Icon v-if="iconOnly" :name="icon" :class="iconClasses" />
      <span v-if="badge" class="badge">{{ badge }}</span>
      <Icon v-if="tag && !iconOnly" name="x" class="tag-close" />
    </component>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import Icon from './Icon.vue'
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'link'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small-x', 'small', 'medium', 'large', 'large-x'].includes(value)
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String,
      default: null
    },
    tag: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['click'])
  
  const tag = computed(() => 'button')
  
  const sizeConfig = {
    'small-x': {
      fontSize: '10px',
      padding: '10px 15px',
      borderRadius: '6px',
      height: '32px',
      iconSize: '13px',
      gap: '5px'
    },
    'small': {
      fontSize: '12px',
      padding: '11px 16px',
      borderRadius: '8px',
      height: '38px',
      iconSize: '14px',
      gap: '6px'
    },
    'medium': {
      fontSize: '14px',
      padding: '14px 21px',
      borderRadius: '10px',
      height: '45px',
      iconSize: '17px',
      gap: '7px'
    },
    'large': {
      fontSize: '16px',
      padding: '16px 24px',
      borderRadius: '12px',
      height: '51px',
      iconSize: '19px',
      gap: '8px'
    },
    'large-x': {
      fontSize: '18px',
      padding: '18px 27px',
      borderRadius: '14px',
      height: '58px',
      iconSize: '22px',
      gap: '9px'
    }
  }
  
  const variantConfig = {
    primary: {
      bg: '#2563eb',
      color: '#ffffff',
      border: '#2563eb',
      hoverBg: '#1d4ed8',
      activeBg: '#1e40af'
    },
    secondary: {
      bg: '#374151',
      color: '#ffffff',
      border: '#374151',
      hoverBg: '#1f2937',
      activeBg: '#111827'
    },
    info: {
      bg: '#0ea5e9',
      color: '#ffffff',
      border: '#0ea5e9',
      hoverBg: '#0284c7',
      activeBg: '#0369a1'
    },
    success: {
      bg: '#10b981',
      color: '#ffffff',
      border: '#10b981',
      hoverBg: '#059669',
      activeBg: '#047857'
    },
    warning: {
      bg: '#f59e0b',
      color: '#ffffff',
      border: '#f59e0b',
      hoverBg: '#d97706',
      activeBg: '#b45309'
    },
    error: {
      bg: '#ef4444',
      color: '#ffffff',
      border: '#ef4444',
      hoverBg: '#dc2626',
      activeBg: '#b91c1c'
    },
    link: {
      bg: 'transparent',
      color: '#2563eb',
      border: 'transparent',
      hoverBg: 'transparent',
      activeBg: 'transparent'
    }
  }
  
  const buttonClasses = computed(() => {
    const classes = [
      'dynamic-button',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'transition-all',
      'duration-200',
      'relative',
      'border',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2'
    ]
  
    // Size classes
    classes.push(`size-${props.size}`)
    
    // Variant classes
    classes.push(`variant-${props.variant}`)
    
    // State classes
    if (props.outlined) classes.push('outlined')
    if (props.disabled) classes.push('disabled')
    if (props.active) classes.push('active')
    if (props.iconOnly) classes.push('icon-only')
    if (props.tag) classes.push('tag-style')
  
    return classes
  })
  
  const iconClasses = computed(() => {
    const classes = ['button-icon']
    if (props.iconOnly) classes.push('icon-only')
    return classes
  })
  
  const customStyles = computed(() => {
    const config = sizeConfig[props.size]
    const variant = variantConfig[props.variant]
    
    let styles = {
      fontSize: config.fontSize,
      borderRadius: config.borderRadius,
      height: config.height,
      gap: config.gap,
      '--icon-size': config.iconSize
    }
  
    if (props.iconOnly) {
      styles.width = config.height
      styles.padding = '0'
    } else {
      styles.padding = config.padding
    }
  
    if (props.outlined) {
      styles.backgroundColor = 'transparent'
      styles.color = variant.bg
      styles.borderColor = variant.border
    } else if (props.variant === 'link') {
      styles.backgroundColor = variant.bg
      styles.color = variant.color
      styles.border = 'none'
      styles.textDecoration = 'underline'
    } else {
      styles.backgroundColor = variant.bg
      styles.color = variant.color
      styles.borderColor = variant.border
    }
  
    if (props.disabled) {
      styles.opacity = '0.5'
      styles.pointerEvents = 'none'
    }
  
    return styles
  })
  
  const handleClick = (event) => {
    if (!props.disabled) {
      emit('click', event)
    }
  }
  </script>
  
  <style scoped>
  .dynamic-button {
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  }
  
  .dynamic-button:hover:not(.disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .dynamic-button:active:not(.disabled) {
    transform: translateY(0);
  }
  
  .dynamic-button.outlined:hover:not(.disabled) {
    background-color: rgba(37, 99, 235, 0.05);
  }
  
  .dynamic-button.active {
    background-color: #1e40af !important;
    color: white !important;
  }
  
  .dynamic-button.outlined.active {
    background-color: #2563eb !important;
    color: white !important;
  }
  
  .button-icon {
    width: var(--icon-size);
    height: var(--icon-size);
    flex-shrink: 0;
  }
  
  .button-text {
    min-width: 0;
    flex: 1;
  }
  
  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: 600;
    min-width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .tag-style {
    border-radius: 20px !important;
  }
  
  .tag-close {
    width: 14px;
    height: 14px;
    margin-left: 4px;
    opacity: 0.7;
  }
  
  .tag-close:hover {
    opacity: 1;
  }
  
  .dynamic-button.variant-link {
    padding: 4px 0 !important;
    height: auto !important;
  }
  </style>