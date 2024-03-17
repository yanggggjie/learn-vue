<script setup lang="ts">
import { defineProps } from 'vue'
import { ITodoListItem } from './TodoList.vue'
import { twMerge } from 'tailwind-merge'

const { todoListItem, onDelete } = defineProps<{
  todoListItem: ITodoListItem
  onDelete: (id: number) => void
}>()
</script>

<template>
  <div :class="twMerge('bg-gray-100 space-x-2 p-2 py-1')">
    <input class="" type="checkbox" v-model="todoListItem.done" />
    <input class="bg-transparent" type="text" v-model="todoListItem.title" />
    <button @click="onDelete(todoListItem.id)">x</button>
  </div>
</template>

<style scoped></style>
