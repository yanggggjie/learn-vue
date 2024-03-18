<script setup lang="ts">
const modal = defineModel(['value'])
</script>

<template>
  <input v-model="modal" />
  <div>value in child <input v-model="modal" /></div>
</template>

<style scoped></style>
