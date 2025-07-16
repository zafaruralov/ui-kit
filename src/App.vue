<template>
  <div class="space">
    <!-- <Calendar /> -->
    <BaseButton
      color="primary"
      variant="solid"
      size="medium"
      :badge="true"
      badgeText="News!"
      badgePosition="on-top"
      badgeDirection="top"
      >Click Me</BaseButton
    >
  </div>
</template>
<script setup>
import BaseButton from "./components/ui/BaseButton.vue";
import Calendar from "./components/ui/Calendar.vue";
</script>
<style>
.space {
  padding: 50px;
}
</style>
