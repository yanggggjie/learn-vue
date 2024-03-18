<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const value = ref('')
</script>

<template>
  <Child v-model="value"></Child>
  <div>value in parent {{ value }}</div>
</template>

<style scoped></style>
