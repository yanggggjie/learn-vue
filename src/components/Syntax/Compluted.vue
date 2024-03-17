<script setup lang="ts">
import { computed, ref } from 'vue'

const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => {
  return firstName.value + lastName.value
})
</script>

<template>
  <div>firstName <input type="text" v-model="firstName" /></div>
  <div>lastName <input type="text" v-model="lastName" /></div>
  <div>fullName {{ fullName }}</div>
</template>

<style scoped></style>
