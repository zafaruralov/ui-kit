<template>
  <!-- Regular Inputs Column -->
  <InputText
    v-model="inputValue"
    label="Ваше Ф.И.О."
    placeholder="hi"
    status="success"
    required
    :is-static-label="true"
    message="Пользователь уже существует!"
  >
  </InputText>
  <InputText placeholder="hi" label="Ваше Ф.И.О." :is-static-label="true" preaddon="https://" />
  <InputText
    v-model="inputValue"
    label="Ваше Ф.И.О."
    :is-static-label="false"
    :has-icon-right="true"
    :has-icon-left="false"
    message="Пользователь уже существует!"
  >
    <!-- <template #icon-right> -->
    <img src="/public/favicon.ico" alt="icon" />
    <!-- </template> -->
  </InputText>
  <InputText v-model="inputValue" label="Ваше Ф.И.О." placeholder="hi" required readonly :is-static-label="true">
  </InputText>
</template>
<script setup>
import InputText from "./components/DynamicInput.vue";
</script>
<style>
.need-space {
  padding: 40px;
  display: flex;
  gap: 200px;
}
</style>
