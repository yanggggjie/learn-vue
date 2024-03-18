<script lang="ts" setup="">
import Child from './Child.vue'

const handleChange = (value: string) => {
  console.log('value', value)
}
</script>

<template>
  <Child @change="handleChange"></Child>
</template>

<style scoped></style>
