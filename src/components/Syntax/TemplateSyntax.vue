<script lang="ts" setup="">
defineProps<{ msg: string }>()
const type: string = 'X'
const arr = [1, 2, 3]
</script>

<template>
  {{ msg }}
  <div v-if="type === 'A'">is Type A</div>
  <div v-else>is not Type A</div>
  <div v-for="item in arr" :key="item">
    {{ item }}
  </div>
</template>

<style scoped></style>
