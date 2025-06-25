<template>
  <div class="app">
    <BaseButton color="primary" size="small-x" variant="solid" :disabled="false">
      <div>Уведомления</div>
      <img src="/public/icon.svg" alt="icon" />
    </BaseButton>
    <BaseButton color="secondary" size="small" variant="outline" :disabled="false">
      <template #default> Уведомления </template>
    </BaseButton>
    <BaseButton color="info" size="medium" variant="tag" :disabled="false">
      <template #default> Уведомления </template>
    </BaseButton>
    <BaseButton color="success" size="large" variant="text" :disabled="false">
      <template #default> Уведомления </template>
    </BaseButton>
    <BaseButton color="warning" size="large-x" variant="icon" :disabled="false">
      <img src="/public/icon.svg" alt="icon" />
    </BaseButton>
    <!-- Badge -->
    <div class="need-space">
      <BaseButton badgeText="hover:top" badgePosition="on-hover" badgeDirection="top"> hover top </BaseButton>
      <BaseButton badgeText="block:right" badgePosition="in-block" badgeDirection="right"> in-block right </BaseButton>
      <BaseButton badgeText="top:left" badgePosition="on-top" badgeDirection="left"> on-top left </BaseButton>
    </div>

    <!-- Group -->
    <div class="button-group">
      <BaseButton :grouped="true">test1</BaseButton>
      <BaseButton :grouped="true">test2</BaseButton>
      <BaseButton :grouped="true">test3</BaseButton>
    </div>
  </div>
</template>
<script setup>
import BaseButton from "./components/BaseButton.vue";
</script>
<style>
.need-space {
  padding: 40px;
  display: flex;
  gap: 200px;
}
</style>
