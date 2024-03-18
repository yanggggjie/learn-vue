<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'

const inputValue = ref()
</script>

<template>
  <Child v-model="inputValue" />
</template>
