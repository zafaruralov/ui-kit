<template>
    <svg 
      :width="size" 
      :height="size" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      :class="className"
    >
      <path v-if="name === 'menu'" d="M3 12h18M3 6h18M3 18h18"/>
      <path v-else-if="name === 'plus'" d="M12 5v14m-7-7h14"/>
      <path v-else-if="name === 'x'" d="M18 6 6 18M6 6l12 12"/>
      <path v-else-if="name === 'align-left'" d="M21 6H3M15 12H3M17 18H3"/>
      <path v-else-if="name === 'align-center'" d="M21 6H3M17 12H7M19 18H5"/>
      <path v-else-if="name === 'align-right'" d="M21 6H3M21 12H9M21 18H7"/>
    </svg>
  </template>
  
  <script setup>
  defineProps({
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 24
    },
    className: {
      type: String,
      default: ''
    }
  })
  </script>