<script lang="ts" setup="">
import { ref } from 'vue'

defineProps<{}>()
const isRed = ref(false)

function handleRedButtonClick() {
  isRed.value = !isRed.value
}
</script>

<template>
  <div>It is a message</div>
  <button :class="{ red: isRed }" @click="handleRedButtonClick">
    switch to red
  </button>
</template>

<style scoped>
.red {
  background: red;
}
</style>
