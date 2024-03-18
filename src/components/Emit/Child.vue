<script setup lang="ts">
defineEmits(['change'])
</script>

<template>
  <input @change="$emit('change', ($event.target as HTMLInputElement).value)" />
</template>

<style scoped></style>
